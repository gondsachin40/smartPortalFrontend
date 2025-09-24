import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../services/user';
import { Router } from '@angular/router';
interface ApiRes {
  access_token: string,
  user: {
    email: string,
    id: number,
    name: string,
    role: string
  };
};
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email: string = '';
  password: string = '';
  constructor(private http: HttpClient, private userservice: User, private router: Router) {
    console.log(userservice.getUser());
  }
  onSubmit() {
    const payload = {
      email: this.email,
      password: this.password
    };
    console.log(payload)
    this.http.post<ApiRes>('http://localhost:5000/api/auth/login', payload)
      .subscribe({
        next: (response) => {
          console.log('API Response:', response);
          this.userservice.setToken(response.access_token);
          console.log(this.userservice.getToken());
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('API Error:', error);
        }
      });
  }
}

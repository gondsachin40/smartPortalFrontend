import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
interface ApiRes {
  msg: string
}
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  email: string = '';
  password: string = '';
  name: string = '';
  constructor(private http: HttpClient, private router: Router) { }
  onSubmit() {
    const payload = {
      name: this.name,
      email: this.email,
      password: this.password
    };
    console.log(payload);
    this.http.post<ApiRes>('http://localhost:5000/api/auth/register', payload)
      .subscribe({
        next: (response) => {
          console.log('API Response:', response.msg);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('API Error:', error);
        }
      });
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  standalone : true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private http: HttpClient){

  }
  callme(){
    this.http.get<any>('http://localhost:5000/api/auth/me')
      .subscribe({
        next: (response) => {
          console.log('API Response:', response);
        },
        error: (error) => {
          console.error('API Error:', error);
        }
      });
  }

}

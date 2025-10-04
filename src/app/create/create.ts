import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
@Component({
  selector: 'app-create',
  standalone : true,
  imports: [FormsModule],
  templateUrl: './create.html',
  styleUrl: './create.css'
})
export class Create {
  constructor(private http : HttpClient , private router: Router) {

  }
   exam = {
    title: '',
    description: '',
    pass_pct: 70,
    duration_minutes: 40
  };
  onSubmit() {
    console.log(this.exam);
    this.http.post<any>('http://127.0.0.1:5000/api/exams' , this.exam).subscribe({
      next : (response)=>{
        this.router.navigate(['/exams']);
      },error : (error)=>{
        console.log(error);
      }
    })
  }

}

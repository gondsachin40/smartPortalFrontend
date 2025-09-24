import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router'
@Component({
  selector: 'app-create',
  standalone : true,
  imports: [FormsModule , RouterOutlet],
  templateUrl: './create.html',
  styleUrl: './create.css'
})
export class Create {
  constructor(private http : HttpClient){

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
        console.log(response)
      },error : (error)=>{
        console.log(error);
      }
    })
  }

}

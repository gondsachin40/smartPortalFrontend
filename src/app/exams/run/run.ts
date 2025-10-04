import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface ApiRes {
  choices: [string, string, string, string],
  id: number,
  marks: number,
  order: number,
  prompt: string,
  qtype: string
};
@Component({
  selector: 'app-run',
  imports: [FormsModule, CommonModule],
  templateUrl: './run.html',
  styleUrl: './run.css'
})
export class Run implements OnInit {
  arr: ApiRes[] = [];
  constructor(private route: ActivatedRoute, private http: HttpClient) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const str = `http://127.0.0.1:5000/api/exams/${id}/questions`;
    this.http.get<ApiRes[]>(str).subscribe({
      next: (response) => {
        this.arr = response;
        console.log(this.arr)
      }, error: (error) => {
        console.log(error);
      }
    });
  }
}

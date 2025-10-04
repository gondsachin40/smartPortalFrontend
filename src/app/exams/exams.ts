import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
interface ApiRes {
  duration: number,
  id: number,
  pass_pot: number,
  title: string,
};

@Component({
  selector: 'app-exams',
  imports: [CommonModule],
  templateUrl: './exams.html',
  styleUrl: './exams.css'
})
export class Exams {
  arr: ApiRes[] = [];
  constructor(private http: HttpClient, private router: Router) {
    // if (this.isBrowser()) {
    this.http.get<ApiRes[]>('http://127.0.0.1:5000/api/exams').subscribe({
      next: (response) => {
        this.arr = response;
        console.log(this.arr)
      }, error: (error) => {
        console.log(error);
      }
    });

  }
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }
  go(n: number) {
    this.router.navigate(['/exams/run/' + `${n}`]);
  }
  edit(id: number) {
    this.router.navigate(['/create/questions/' + `${id}`]);
  }

}

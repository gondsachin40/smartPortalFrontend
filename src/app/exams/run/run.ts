import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ApiRes {
  choices: [string, string, string, string];
  id: number;
  marks: number;
  order: number;
  prompt: string;
  qtype: string;
}

@Component({
  selector: 'app-run',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './run.html',
  styleUrl: './run.css'
})
export class Run implements OnInit {
  arr: ApiRes[] = [];
  empty : boolean = false;
  currentIndex = 0;
  selectedChoices: {[qid: number]: string} = {};
  quizCompleted = false;
  score = 0;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const str = `http://127.0.0.1:5000/api/exams/${id}/questions`;
    this.http.get<ApiRes[]>(str).subscribe({
      next: (response) => {
        this.arr = response;
        if(this.arr.length === 0){
          this.empty = true;
        }
        this.currentIndex = 0;
        this.selectedChoices = {};
        this.quizCompleted = false;
        this.score = 0;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  selectChoice(choice: string) {
    const currQ = this.arr[this.currentIndex];
    this.selectedChoices[currQ.id] = choice;
  }

  next() {
    if (this.currentIndex < this.arr.length - 1) {
      this.currentIndex++;
    } else {
      this.finishQuiz();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  finishQuiz() {
    this.quizCompleted = true;
    this.score = this.arr.reduce((acc, q) => {
      const correctAnswer = q.choices[0]; 
      return acc + (this.selectedChoices[q.id] === correctAnswer ? q.marks : 0);
    }, 0);
  }
  fromCharCode(i: number): string {
  return String.fromCharCode(65 + i);
}
}

import { Component , OnInit} from '@angular/core'; 
import { FormsModule } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
interface IQuestion { 
  qtype: string,
  prompt: string, 
  choices: string[], 
  correct_answer: string, 
  marks: number 
}; 
@Component({ 
  selector: 'app-questions', 
  imports: [FormsModule , CommonModule], 
  standalone : true,
  templateUrl: './questions.html', 
  styleUrl: './questions.css' 
}) 
export class Questions  implements OnInit { 
  msg : string = "show problems";
  show : boolean = true; 
  Show :boolean = false;
  question: IQuestion = { qtype : "objective", prompt: '', choices: ['', '', '', ''], correct_answer: '', marks: 0, };
  questions: IQuestion[] = []; 
  constructor(private http : HttpClient , private snack : MatSnackBar , private route : ActivatedRoute){ }
    ngOnInit(): void {
      if(this.isBrowser()){
        let id = this.route.snapshot.paramMap.get('id');  
        this.http.get<any>(`http://127.0.0.1:5000/api/exams/${id}/questions`).subscribe(
        { next : (response)=>{ 
          this.questions = response; 
        },error : (error)=>{ console.log(error); } 
      })
      }
    }
    toggle() : void{ 
      this.show = !this.show; console.log(this.show) 
    } 
    toggle_quesions() : void{
      this.Show = !this.Show;
      if(this.msg === "show problems")
        this.msg = "hide problems";
      else
        this.msg = "show problems";
    }
    onSubmit() : void {
        let id = this.route.snapshot.paramMap.get('id');  
       this.http.post<any>(`http://127.0.0.1:5000/api/exams/${id}/questions` , this.question).subscribe(
        { next : (response)=>{ 
          console.log(response) 
          this.questions.push(this.question); 
          this.snack.open('Question added successfully!', 'Close', {
            duration: 3000,
          });

        },error : (error)=>{ console.log(error); } 
      }) } 
      private isBrowser(): boolean {
        return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
      }
    
    }
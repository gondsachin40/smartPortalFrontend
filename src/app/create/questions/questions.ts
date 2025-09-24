import { Component , OnInit} from '@angular/core'; 
import { FormsModule } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http'; 
interface IQuestion { 
  qtype: string,
  prompt: string, 
  choices: string[], 
  correct_answer: string, 
  marks: number 
}; 
@Component({ 
  selector: 'app-questions', 
  imports: [FormsModule], 
  standalone : true,
  templateUrl: './questions.html', 
  styleUrl: './questions.css' 
}) 
export class Questions  implements OnInit { 
  show : boolean = true; 
  Show :boolean = false;
  question: IQuestion = { qtype : "objective", prompt: '', choices: ['', '', '', ''], correct_answer: '', marks: 0, };
  questions: IQuestion[] = []; 
  constructor(private http : HttpClient){ }
    ngOnInit(): void {
      if(this.isBrowser()){
        this.http.get<any>('http://127.0.0.1:5000/api/exams/3/questions').subscribe(
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
    }
    onSubmit() : void {
       this.http.post<any>('http://127.0.0.1:5000/api/exams/3/questions' , this.question).subscribe(
        { next : (response)=>{ 
          console.log(response) 
          this.questions.push(this.question); 
        },error : (error)=>{ console.log(error); } 
      }) } 
      private isBrowser(): boolean {
        return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
      }
    
    }
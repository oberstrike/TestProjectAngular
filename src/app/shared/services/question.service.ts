import {Injectable} from '@angular/core';
import {Question} from '../models/question.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questions: Array<Question> = [
    {id: 1, content: 'content', subject: 1, date: Date.now()},
  ];

  constructor() {
  }

  getAllQuestions(): Array<Question> {
    return this.questions;
  }

  addQuestion(question: Question): Array<Question> {
    this.questions.push(question);
    return this.questions;
  }
}

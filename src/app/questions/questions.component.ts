import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {QuestionService} from '../shared/services/question.service';
import {Question} from '../shared/models/question.model';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {DatePipe} from '@angular/common';
import {CustomNumberDatePipe} from '../shared/pipes/custom.number.pipe';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers: [DatePipe, CustomNumberDatePipe],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('250ms', style({opacity: 1}))
      ])
    ])
  ]
})
export class QuestionsComponent implements OnInit {

  questions: Array<Question>;

  deleteIcon = faTrash;

  selectedFiles?: FileList;

  constructor(private questionService: QuestionService) {
  }

  ngOnInit(): void {
    this.questions = this.questionService.getAllQuestions();
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    const file: File = this.selectedFiles[0] as File;

  }
}

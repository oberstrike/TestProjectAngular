import {Component, OnInit} from '@angular/core';
import {faBook, faQuestion, faStar} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  title = 'Polit.me';
  toggleNavbar = true;
  starIcon = faStar;
  questionIcon = faQuestion;
  bookIcon = faBook;

  constructor() {
  }

  ngOnInit(): void {
  }

}

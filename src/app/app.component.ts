import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Country} from './shared/models/country.model';
import {map} from 'rxjs/operators';

;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private title: Title) {

  }

  countryNames: string[] = ['Deutschland', 'Dänemark', 'England', 'Frankreich', 'Italien', 'Schweden', 'Polen', 'Portugal', 'Luxemburg'];
  countries: Country[] = this.countryNames.map((each) => ({name: each}));

  changeTitle(newTitle: string): void {
    this.title.setTitle(newTitle);
  }

  ngOnInit(): void {
  }
}


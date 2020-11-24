import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Country} from '../shared/models/country.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  @Input() countries: Country[];

  @Output() countryClickEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  onClick(country: string): void {
    this.countryClickEvent.emit(country);
  }
}

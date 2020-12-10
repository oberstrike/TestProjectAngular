import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Country} from '../shared/models/country.model';
import {CountryService} from '../shared/services/country.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  @Input() countries: Country[];

  constructor(private countryService: CountryService, private titleService: Title) {
  }

  ngOnInit(): void {
    this.countries = this.countryService.getAllCountries().sort((a, b) => a.name.localeCompare(b.name));
  }


}

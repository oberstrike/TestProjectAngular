import {Injectable} from '@angular/core';
import {Country} from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private readonly countries: Country[];

  constructor() {
    this.countries = ['Deutschland', 'Dänemarrk', 'England', 'Frankreich', 'Italien', 'Schweden', 'Polen', 'Luxemburg', 'Belgien']
      .map((each, index) => ({name: each, id: index}));
  }

  public getAllCountries(): Country[] {
    return this.countries;
  }

  getById(id: number): Country {
    return this.countries.filter((each) => each.id === id)[0];
  }
}

import {Component, OnInit} from '@angular/core';
import {Country} from '../shared/models/country.model';
import {ActivatedRoute, Params} from '@angular/router';
import {CountryService} from '../shared/services/country.service';
import {Icon} from '@fortawesome/fontawesome-svg-core';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  country: Country;
  leftArrowIcon = faArrowLeft;
  rightArrowIcon = faArrowRight;
  isFirst = false;
  isLast = true;

  constructor(private route: ActivatedRoute, private countryService: CountryService) {
    this.route.paramMap.subscribe((params: Params) => {
      const id = params.get('id');
      this.country = countryService.getById(+id);
    });
  }


  ngOnInit(): void {
  }

}

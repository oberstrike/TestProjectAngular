import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Country} from './shared/models/country.model';
import {CountryService} from './shared/services/country.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }


}


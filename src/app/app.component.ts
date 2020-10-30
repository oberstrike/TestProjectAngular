import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestProjectAngular';
  countries: string[] = ['Deutschland', 'Dänemark', 'England', 'Frankreich', 'Italien', 'Schweden', 'Polen', 'Portugal', 'Luxemburg'];

}


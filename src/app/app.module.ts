import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { QuestionsComponent } from './questions/questions.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomNumberDatePipe } from './shared/pipes/custom.number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SubjectsComponent,
    QuestionsComponent,
    CustomNumberDatePipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

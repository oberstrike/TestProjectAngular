import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SubjectsComponent} from './subjects/subjects.component';
import {QuestionsComponent} from './questions/questions.component';



const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'subjects', component: SubjectsComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

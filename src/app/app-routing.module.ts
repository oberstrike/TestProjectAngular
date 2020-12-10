import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountriesComponent} from './countries/countries.component';
import {CountryComponent} from './country/country.component';


const routes: Routes = [
  {path: '', component: CountriesComponent, pathMatch: 'full'},
  {path: 'country/:id', component: CountryComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
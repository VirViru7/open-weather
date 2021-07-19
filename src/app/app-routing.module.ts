import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityTempComponent } from './components/city-temp/city-temp.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "city/:cityName",
    component: CityTempComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

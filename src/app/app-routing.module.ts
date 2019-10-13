import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CinemaDetailsComponent} from './containers/cinema-details/cinema-details.component';
import {CinemaMainComponent} from './containers/cinema-main/cinema-main.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: CinemaMainComponent,
  },
  {
    path: 'list/:cinemaId',
    component: CinemaDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

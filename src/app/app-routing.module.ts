import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CinemaDetailsComponent} from './containers/cinema-details/cinema-details.component';
import {CinemaMainComponent} from './containers/cinema-main/cinema-main.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: CinemaMainComponent,
  },
  {
    path: 'list',
    redirectTo: 'list/:cinemaId',
    pathMatch: 'full',
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

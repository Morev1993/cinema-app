import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { CinemaMainComponent } from './containers/cinema-main/cinema-main.component';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {MatButtonModule, MatCardModule, MatGridListModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {CinemaListComponent} from './components/cinema-list/cinema-list.component';
import {CinemaItemComponent} from './components/cinema-item/cinema-item.component';
import {CinemaDetailsComponent} from './containers/cinema-details/cinema-details.component';
import {CinemaSearchInputComponent} from './containers/cinema-search-input/cinema-search-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CinemaListComponent,
    CinemaItemComponent,
    CinemaDetailsComponent,
    CinemaSearchInputComponent,
    CinemaMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

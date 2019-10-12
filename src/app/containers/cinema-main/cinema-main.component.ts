import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/cinema.models';

@Component({
  selector: 'app-cinema-main',
  templateUrl: './cinema-main.component.html',
  styleUrls: ['./cinema-main.component.scss']
})
export class CinemaMainComponent implements OnInit {
  list: Movie[] = [];

  constructor() { }

  ngOnInit() {
  }

  addMovie(movies: Movie[]) {
    movies
      .filter(movie => this.list.every(item => item.imdbID !== movie.imdbID))
      .forEach(movie => {
      this.list.push(movie);
    });
  }

  removeMovie(movie: Movie) {
    console.log(movie);
    this.list = this.list.filter(item => item.imdbID !== movie.imdbID);
  }

}

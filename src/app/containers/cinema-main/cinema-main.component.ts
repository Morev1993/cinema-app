import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/cinema.models';
import {StorageService} from '../../services/storage.service';
import {MOVIES_STORAGE_KEY} from '../../constants/cinema.constants';

@Component({
  selector: 'app-cinema-main',
  templateUrl: './cinema-main.component.html',
  styleUrls: ['./cinema-main.component.scss']
})
export class CinemaMainComponent implements OnInit {
  list: Movie[] = [];

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.list = this.storageService.getJSON(MOVIES_STORAGE_KEY) || [];

  }

  addMovie(movies: Movie[]) {
    movies
      .filter(movie => this.list.every(item => item.imdbID !== movie.imdbID))
      .forEach(movie => {
      this.list.push(movie);
    });

    this.storageService.saveJSON(MOVIES_STORAGE_KEY, this.list);
  }

  removeMovie(movie: Movie) {
    this.list = this.list.filter(item => item.imdbID !== movie.imdbID);

    this.storageService.saveJSON(MOVIES_STORAGE_KEY, this.list);
  }

}

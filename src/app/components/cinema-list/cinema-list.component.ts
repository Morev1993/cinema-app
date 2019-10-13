import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Movie} from '../../models/cinema.models';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.scss']
})
export class CinemaListComponent {
  @Input() list: Movie[] = [];

  @Output() removeMovie = new EventEmitter<Movie>();

  removeItem(movie: Movie) {
    this.removeMovie.emit(movie);
  }

}

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Movie} from '../../models/cinema.models';

@Component({
  selector: 'app-cinema-item',
  templateUrl: './cinema-item.component.html',
  styleUrls: ['./cinema-item.component.scss']
})
export class CinemaItemComponent {
  @Input() item: Movie = {} as Movie;

  @Output() remove = new EventEmitter<Movie>();

  handleRemove(movie) {
    this.remove.emit(movie);
  }

}

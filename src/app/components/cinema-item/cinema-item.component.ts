import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from '../../models/cinema.models';

@Component({
  selector: 'app-cinema-item',
  templateUrl: './cinema-item.component.html',
  styleUrls: ['./cinema-item.component.scss']
})
export class CinemaItemComponent implements OnInit {
  @Input() item: Movie = {} as Movie;

  @Output() remove = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit() {
  }

  handleRemove(movie) {
    this.remove.emit(movie);
  }

}

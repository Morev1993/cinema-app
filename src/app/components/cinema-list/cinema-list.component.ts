import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {Movie} from '../../models/cinema.models';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.scss']
})
export class CinemaListComponent implements OnInit, OnDestroy {
  @Input() list: Movie[] = [];

  @Output() removeMovie = new EventEmitter<Movie>();

  private ngDestroyer: Subject<any> = new Subject<any>();

  constructor() {

  }

  ngOnInit() {

  }

  removeItem(movie: Movie) {
    this.removeMovie.emit(movie);
  }

  ngOnDestroy() {
    this.ngDestroyer.next();
    this.ngDestroyer.complete();
  }

}

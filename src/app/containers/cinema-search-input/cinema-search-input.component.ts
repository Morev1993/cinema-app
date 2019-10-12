import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {concat, Observable, of, Subject} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {CinemaService} from '../../services/cinema.service';
import {Movie} from '../../models/cinema.models';

@Component({
  selector: 'app-cinema-search-input',
  templateUrl: './cinema-search-input.component.html',
  styleUrls: ['./cinema-search-input.component.scss']
})
export class CinemaSearchInputComponent implements OnInit {
  cinema$: Observable<Movie[]>;
  cinemaLoading = false;
  cinemaInput$ = new Subject<string>();
  selectedMovies: Movie[] = [];

  @Output() addMovie = new EventEmitter<Movie[]>();

  constructor(private cinemaService: CinemaService) {
  }

  ngOnInit() {
    this.loadPeople();
  }

  trackByFn(item) {
    return item.id;
  }

  change(movies) {
    this.addMovie.emit(movies);
  }

  private loadPeople() {
    this.cinema$ = concat(
      of([]),
      this.cinemaInput$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        tap(() => this.cinemaLoading = true),
        switchMap(term => this.cinemaService.getList(term).pipe(
          catchError(() => of([])),
          tap(() => this.cinemaLoading = false)
        ))
      )
    );
  }

}

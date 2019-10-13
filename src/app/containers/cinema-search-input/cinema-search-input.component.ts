import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {concat, Observable, of, Subject} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, switchMap, takeUntil, tap} from 'rxjs/operators';
import {CinemaService} from '../../services/cinema.service';
import {Movie} from '../../models/cinema.models';

@Component({
  selector: 'app-cinema-search-input',
  templateUrl: './cinema-search-input.component.html',
  styleUrls: ['./cinema-search-input.component.scss']
})
export class CinemaSearchInputComponent implements OnInit, OnDestroy {
  cinema$: Observable<Movie[]>;
  cinemaLoading = false;
  cinemaInput$ = new Subject<string>();
  selectedMovies: Movie[] = [];

  @Output() addMovie = new EventEmitter<Movie[]>();

  private ngDestroyer: Subject<any> = new Subject<any>();

  constructor(private cinemaService: CinemaService) {
  }

  ngOnInit() {
    this.loadMovies();
  }

  trackByFn(item) {
    return item.id;
  }

  change(movies) {
    this.addMovie.emit(movies);
  }

  ngOnDestroy() {
    this.ngDestroyer.next();
    this.ngDestroyer.complete();
  }

  private loadMovies() {
    this.cinema$ = concat(
      of([]),
      this.cinemaInput$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        tap(() => this.cinemaLoading = true),
        switchMap(term => this.cinemaService.getList(term).pipe(
          catchError(() => of([])),
          tap(() => this.cinemaLoading = false)
        )),
        takeUntil(this.ngDestroyer)
      )
    );
  }

}

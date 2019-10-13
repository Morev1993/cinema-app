import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Movie} from '../models/cinema.models';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private http: HttpClient) { }

  getList(term: string): Observable<Movie[]> {
    return this.http.get(environment.url, {
      params: {
        apikey: environment.api_key,
        s: term,
        type: 'movie'
      }
    }).pipe(
      map((data: {
        Search: Movie[]
      }) => data.Search),
      catchError(err => throwError(err))
    );
  }
}

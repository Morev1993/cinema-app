import { Component } from '@angular/core';
import {Movie} from '../../models/cinema.models';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {StorageService} from '../../services/storage.service';
import {MOVIES_STORAGE_KEY} from '../../constants/cinema.constants';
import {isEmpty} from '../../shared/utils';

@Component({
  selector: 'app-cinema-details',
  templateUrl: './cinema-details.component.html',
  styleUrls: ['./cinema-details.component.scss']
})
export class CinemaDetailsComponent {
  movie: Movie = {} as Movie;

  isEmpty = isEmpty;

  private ngDestroyer: Subject<any> = new Subject<any>();

  constructor(private route: ActivatedRoute,
              private storageService: StorageService) {
    this.route.params.pipe(
      takeUntil(this.ngDestroyer)
    ).subscribe(data => {
      const cinemaId = data.cinemaId;

      const moviesStorageList: Movie[] = this.storageService.getJSON(MOVIES_STORAGE_KEY) as Movie[];

      if (Array.isArray(moviesStorageList)) {
        this.movie = moviesStorageList.find(item => item.imdbID === cinemaId) || {} as Movie;
      }

    });
  }

}

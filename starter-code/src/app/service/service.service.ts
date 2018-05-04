import {Injectable} from '@angular/core';
import {Movies, movieList} from './movies-data';

@Injectable()
export class ServiceService {
  movies: Array<Movies> = movieList;

  constructor() {}

  getMovies() {
    return this.movies;
  }

  getMovie(id: number) {
    let movieInfo;

    this.movies.forEach(oneMovie => {
      if (oneMovie.id === id) {
        movieInfo = oneMovie;
      }
    });
    return movieInfo;
  }
}

import { Injectable } from '@angular/core';
import { moviesExample } from '../example';
import {  Movie } from '../model/movie';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class MovieService {

  private movies: Array<Movie> = []; // prazan niz;treba da se ucitava iz examples.ts

	constructor() {

		this.movies = moviesExample.map((movie) => {
      return new Movie(
        movie.id,
        movie.name,
        movie.director,
        movie.imageUrl,
        movie.duration,
        new Date(movie.releaseDate),
        movie.genres
      );
    });
	}
	getMovies(): Observable<Array<Movie>> {

 		 return new Observable(observer => {
 				observer.next(this.movies);
 			});
       // return Observable.of(this.movies);
  }

  searchMovies(term): Observable<Array<Movie>> {
    const foundedMovies = this.movies.filter((movie: Movie) => {
      return movie.name.includes(term);
    });
     
    return new Observable(observer => {
      observer.next(foundedMovies);
    });
    // return Observable.of(foundedMovies);
  }
	


}

import { Component, OnInit } from '@angular/core';
import {  MovieService } from '../../shared/services/movie.service';
import { Movie } from '../../shared/model/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
	private movies: Array<Movie>;
	private count:number = 0;
	// opcije kad su svi markirani ili samo neki
	public selectedAll = false;
    public selectedSome = false;

    
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  	this.movieService.getMovies().subscribe(movies => {this.movies = movies});
  	console.log(this.movies);
  }

  onSelect(selected) {
  	this.count++;
  }
  selectAllCounter() {
        this.count = this.movies.length;
    }

	deselectAllCounter() {
	    this.count = 0;
	}

}

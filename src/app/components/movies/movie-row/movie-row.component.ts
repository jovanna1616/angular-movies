import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../../shared/model/movie';

@Component({
  selector: 'app-movie-row',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.css']
})
export class MovieRowComponent implements OnInit {
	@Input() movie: Movie;
	@Output() onSelect = new EventEmitter<Movie>();

	//  po default-u nista nije selectovano
	private selected: boolean = false;
	
  constructor() { }

  ngOnInit() {
  }

  // onesposobljavanje select buutton na click
  selectMovie(movie: Movie) {
    this.onSelect.emit(movie);
    this.selected = true;
  }

}

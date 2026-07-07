import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {

  @Input({ required: true }) movie!: Movie;

  @Output() favoriteClicked = new EventEmitter<Movie>();

  addToFavorites() {
    this.favoriteClicked.emit(this.movie);
  }


}

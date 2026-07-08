import { Component, input, output } from '@angular/core';
import { DatePipe, DecimalPipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { Movie } from '../../models/movie';
import { NoteEnEtoilesPipe } from '../../pipes/note-en-etoiles-pipe';
import { HighlightDirective } from '../../directives/highlight';

@Component({
  selector: 'app-movie-card',
  imports: [
    NgClass,
    NgStyle,
    UpperCasePipe,
    DatePipe,
    DecimalPipe,
    NoteEnEtoilesPipe,
    HighlightDirective
  ],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css'
})
export class MovieCard {
  movie = input.required<Movie>();

  favoriToggle = output<number>();

  addToFavorites() {
    this.favoriToggle.emit(this.movie().id);
  }
}
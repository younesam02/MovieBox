import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieCard } from "./components/movie-card/movie-card";
import { FavoritesCounter } from "./components/favorites-counter/favorites-counter";
import { Movie } from './models/movie';
import { Movies } from './services/movies';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MovieCard, FavoritesCounter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  appTitle = 'MovieBox';

  private moviesService = inject(Movies);

  movies = this.moviesService.movies;

  toggleFavori(id: number) {
    this.moviesService.toggleFavori(id);
  }
 }
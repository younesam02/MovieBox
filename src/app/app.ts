import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieCard } from "./components/movie-card/movie-card";
import { FavoritesCounter } from "./components/favorites-counter/favorites-counter";
import { Movie } from './models/movie';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MovieCard, FavoritesCounter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  appTitle = 'MovieBox';
  movies: Movie[] = [
    {
      id: 1,
      title: 'Interstellar',
      poster: '/images/interstellar.png',
      rating: 8.6,
      year: 2014,
      genre: 'Science-fiction'
    },
    {
      id: 2,
      title: 'Inception',
      poster: '/images/inception.png',
      rating: 8.8,
      year: 2010,
      genre: 'Thriller'
    },
    {
      id: 3,
      title: 'The Dark Knight',
      poster: '/images/dark-knight.png',
      rating: 9.0,
      year: 2008,
      genre: 'Action'
    }
  ];

 }

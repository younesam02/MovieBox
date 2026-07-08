import { computed, Injectable, signal } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class Movies {
    private _movies = signal<Movie[]>([
    {
      id: 1,
      title: 'Interstellar',
      poster: 'images/interstellar.png',
      rating: 8.6,
      year: 2014,
      genre: 'Science-fiction',
      releaseDate: new Date('2014-11-07'),
      isFavorite: false
    },
    {
      id: 2,
      title: 'Inception',
      poster: 'images/inception.png',
      rating: 8.8,
      year: 2010,
      genre: 'Thriller',
      releaseDate: new Date('2010-07-16'),
      isFavorite: false
    },
    {
      id: 3,
      title: 'The Dark Knight',
      poster: 'images/dark-knight.png',
      rating: 9.0,
      year: 2008,
      genre: 'Action',
      releaseDate: new Date('2008-07-18'),
      isFavorite: false
    }
  ]);

  movies = this._movies.asReadonly();

  favoritesCount = computed(() =>
    this._movies().filter(movie => movie.isFavorite).length
  );

  bonusScore = computed(() => this.favoritesCount() * 2);

  toggleFavori(id: number) {
    this._movies.update(movies =>
      movies.map(movie =>
        movie.id === id
          ? { ...movie, isFavorite: !movie.isFavorite }
          : movie
      )
    );
  }
}
import { Component, computed, inject, Inject, Input, signal } from '@angular/core';
import { Movies } from '../../services/movies';

@Component({
  selector: 'app-favorites-counter',
  imports: [],
  templateUrl: './favorites-counter.html',
  styleUrl: './favorites-counter.css',
})
export class FavoritesCounter {
  moviesService = inject(Movies);
}

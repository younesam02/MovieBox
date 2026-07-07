import { Component, computed, Input, signal } from '@angular/core';

@Component({
  selector: 'app-favorites-counter',
  imports: [],
  templateUrl: './favorites-counter.html',
  styleUrl: './favorites-counter.css',
})
export class FavoritesCounter {

  favoris = signal(0);

  doubleFavoris = computed(() => this.favoris() * 2);

  ajouterFavori() {
    this.favoris.update(value => value + 1);
  }

}

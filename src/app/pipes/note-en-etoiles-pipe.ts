import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noteEnEtoiles',
})
export class NoteEnEtoilesPipe implements PipeTransform {

transform(rating: number): string {
    const starsCount = Math.round(rating / 2);
    const fullStars = '★'.repeat(starsCount);
    const emptyStars = '☆'.repeat(5 - starsCount);

    return fullStars + emptyStars;
  }

}

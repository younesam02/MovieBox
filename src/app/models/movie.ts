export interface Movie {
  id: number;
  title: string;
  poster: string;
  rating: number;
  year: number;
  genre: string;
  releaseDate: Date;
  isFavorite: boolean
}
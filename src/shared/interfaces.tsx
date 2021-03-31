export interface FavoriteResponse {
  data: Favorite[];
}

export interface Favorite {
  id: string;
  link: string;
  img: string;
}

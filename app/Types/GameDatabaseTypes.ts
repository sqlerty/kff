export interface Genre {
  id: number;
  name: string;
}

export interface Platform {
  id: number;
  name: string;
  icon_url: string | null;
}

export interface Game {
  id: string;
  created_at: string;
  title: string;
  slug: string;
  price: number;
  discount_price: number | null;
  cover_image_url: string ;
  steam_url: string | null;
  platform_id: number | null;
  genre_id: number | null;
  genres?: Genre | null;    
  platforms?: Platform | null;
}
export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  reviews?: [];
  rating: number;
  images: string[];
  discount?: number;
  hashtags: string[];
  count_sales: number;
  provider: {
    createdAt: string;
    id: number;
    name: string;
    image: string;
  };
}

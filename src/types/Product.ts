import { Category } from "./Category";

export interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: {
    key: string;
    location: string;
  };
  Category: Category;
  stock: number;
}

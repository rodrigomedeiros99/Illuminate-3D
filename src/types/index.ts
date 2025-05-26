export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  category: string;
  images: string[];
  isNew: boolean;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
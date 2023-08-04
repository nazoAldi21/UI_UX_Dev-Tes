// types/types.ts
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: string;
        count: number;
    }
  }

  export interface CartItem {
    product: Product;
    quantity: number;
  }
  
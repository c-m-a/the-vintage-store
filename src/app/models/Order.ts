import { Product } from './Product';

export class Order {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  orderedAt?: Date;
  product: Product = {
    price: 0,
    tax: 0,
    isOnSale: false
  };
  total: number = 0;
}


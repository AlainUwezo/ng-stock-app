import { Type } from './type.model';
export class Product{
  id: number;
  name: string;
  type: Type;
  price: number;
  quantity: number;
  expiredAt: Date;
  createdAt: Date = new Date();
  description: string;
}

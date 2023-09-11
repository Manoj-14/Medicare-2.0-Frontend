import { Medicine } from './medicine';

export interface Cart {
  id?: number;
  medicines: Medicine;
  quantity: number;
  amount?: number;
}

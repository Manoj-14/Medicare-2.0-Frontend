import { Cart } from './cart';
import { Purchase } from './purchase';

export interface User {
  id?: number;
  name?: string;
  email: string;
  phone?: number;
  address?: Address;
  password?: string;
  cart?: Cart[];
  purchase?: Purchase[];
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
}

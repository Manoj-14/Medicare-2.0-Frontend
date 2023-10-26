import { Medicine } from './medicine';
import { PaymentMethods } from './payment-methods';

export interface Purchase {
  id?: number;
  medicine: Medicine;
  quantity: number;
  totalAmount: number;
  paymentMethods: PaymentMethods;
  date: Date;
}

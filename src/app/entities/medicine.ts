import {SafeUrl} from "@angular/platform-browser";

export interface Medicine {
  id?: number;
  name: string;
  price: number;
  quantity: number;
  seller: string;
  description: string;
  active: boolean;
  image: string;
}
import {Medicine} from "./medicine";

export interface Cart {
  id?:number;
  medicine:Medicine;
  quantity:number;
  amount?:number;
}

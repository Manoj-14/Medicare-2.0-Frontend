import {Cart} from "./cart";
import {Purchase} from "./purchase";

export interface User {
  id?:number;
  name?:string;
  email:string;
  password?:string;
  cart?:Cart[];
  purchase:Purchase[];
}

import {SafeUrl} from "@angular/platform-browser";

export interface Medicine {
  id?: number;
  name: string;
  price: number;
  seller: string;
  description: string;
  active: boolean;
  image: Image;
}

export interface Image {
  fileName: string;
  contentType: string;
  content: string;
  safeURL?: SafeUrl
}

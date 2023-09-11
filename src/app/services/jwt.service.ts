import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor() {}

  decode(token: string) {
    return jwtDecode(token);
  }
}

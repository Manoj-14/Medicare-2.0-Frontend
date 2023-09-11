import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authorization = localStorage.getItem('token')
      ? `Bearer ${localStorage.getItem('token')}`
      : '';
    if (
      request.url.includes('api/medicines') ||
      request.url.includes('api/users') ||
      request.url.includes('api/admin')
    ) {
      return next.handle(request.clone({ setHeaders: { authorization } }));
    }
    return next.handle(request);
  }
}

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Network } from './backend-data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(public network: Network) {}

  exceptions: string[] = [
    '/api/auth/token',
    '/api/auth/forgotten-password',
    '/api/profile/faq',
    '/api/profile/policys',
    '/api/categories/',
    '/api/departments/',
    '/api/users/register/',
    '/api/posts/1/comments/',
    '/api/departments/',
  ];

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Req url', req.url);
    if (this.isException(req.url)) {
      console.log('No hacer nada');
      return next.handle(req);
    }

    console.log('Llamando refresh token');
    this.network.getCurrentToken();

    return next.handle(req);
  }

  isException(url: string): boolean {
    return this.exceptions.some((exception) => {
      if (url.startsWith(exception)) {
        return true;
      }
      return false;
    });
  }
}

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Network } from './backend-data.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(public network: Network) {}

  urlAddress = environment.urlAddress;
  exceptions: string[] = [
    `${this.urlAddress}auth/token`,
    `${this.urlAddress}auth/forgotten-password`,
    `${this.urlAddress}profile/faq`,
    `${this.urlAddress}profile/policys`,
    `${this.urlAddress}categories/`,
    `${this.urlAddress}departments/`,
    `${this.urlAddress}users/register/`,
    `${this.urlAddress}posts/1/comments/`,
    `${this.urlAddress}departments/`,
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

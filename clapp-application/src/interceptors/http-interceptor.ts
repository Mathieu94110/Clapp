import { Injectable } from '@angular/core';
import {
    HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiKey: string = environment.apiKey;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('apiKey', apiKey);

    const clonedReq = req.clone({
      headers: headers,
      params: params,
    });
    return next.handle(clonedReq);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true },
];
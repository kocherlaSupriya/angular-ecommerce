import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newRequest=request.clone({headers:new HttpHeaders(
      {'token':'1a2b3c4e5c','content-type':'application/json'})})
      // if(request.method==='POST'){
      //   const newRequest=request.clone({headers:new HttpHeaders(
      // {'token':'1a2b3c4e5c','content-type':'application/json'})});
      // return next.handle(newRequest);
      // }
    return next.handle(newRequest);
  }
}

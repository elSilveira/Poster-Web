import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionService } from './session-service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private authService: SessionService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.addAuthToken(request));
  }

  addAuthToken(request: HttpRequest<any>) {
    const token = this.authService.getToken();
    return token ? request.clone({
      setHeaders: {
        Authorization: token
      }
    }) : request;
  }
}
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import {catchError} from 'rxjs/internal/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError(error => {
        let errorMessage = '';
        if (error instanceof ErrorEvent) {
          errorMessage = `Client-side: ${error.error.message}`;
        } else {
          errorMessage = `Server-side: ${error.status} ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}

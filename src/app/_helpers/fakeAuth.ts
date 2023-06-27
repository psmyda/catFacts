import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';
@Injectable()
export class fakeAuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    return handleRoute();

    function handleRoute() {
      switch (true) {
        case url.endsWith('/users/authenticate') && method === 'POST':
          return authenticate();
        default:
          return next.handle(request);
      }
    }

    // route functions
    function authenticate() {
      const { username, password } = body;

      if (username == 'test' && password == 'test')
        return ok({
          id: '123',
          username: 'Test',
          token: 'fake-jwt-token'
        })
      return error('Username or password is incorrect');
    }

    // helper functions
    function ok(body?: any) {
      return of(new HttpResponse({ status: 200, body }))
        .pipe(delay(500));
    }

    function error(message: string) {
      return throwError(() => ({ error: { message } }))
        .pipe(materialize(), delay(500), dematerialize());
    }
  }
}

export const fakeAuthProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: fakeAuthInterceptor,
  multi: true
};

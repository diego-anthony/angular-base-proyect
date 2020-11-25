import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import HttpStatusCode from '@core/enums/http-status-code.enum';
import { AuthService } from '@core/services/common/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(public _authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        if (this._authService.isAuthenticated()) {
            const token = this._authService.getToken();
            request = request.clone({ headers: request.headers.set('Authorization', `Bearer ${token}`) });
        }
        return next.handle(request)
        .pipe(
            catchError((response: HttpErrorResponse) => {
                // TODO: agregar FORBIDDEN
                if (response.status === HttpStatusCode.UNAUTHORIZED) {
                    this._authService.logout();
                }
                return throwError(response);
            })
        );
    }
}

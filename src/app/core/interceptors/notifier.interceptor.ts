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
import { NotificationService } from '@core/services/notification.service';
import HttpStatusCode from '@core/enums/http-status-code.enum';

@Injectable({ providedIn: 'root' })
export class NotifierInterceptor implements HttpInterceptor {
    constructor(
        private _notification: NotificationService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                catchError((response: HttpErrorResponse) => {
                    switch (response.status) {
                        case 0:
                            this._notification.error('No se pudo acceder al servidor. Virifique su conexión a internet.');
                            break;
                        case HttpStatusCode.BAD_REQUEST:
                            this._notification.warning(response.error.message);
                            break;
                        case HttpStatusCode.INTERNAL_SERVER_ERROR:
                            this._notification.error('Error al procesar información.');
                            break;
                        case HttpStatusCode.NOT_FOUND:
                            // TODO: Redireccionar a página 404
                            this._notification.error('Recurso no encontrado.');
                            break;
                    }
                    return throwError(response);
                })
            );
    }
}

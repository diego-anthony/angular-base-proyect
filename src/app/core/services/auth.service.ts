import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from '@env';
import { LoginRequest } from '../models/login-request.model';
import { UserSession } from '../models/user-session.model';
import { RoutePath } from '../configs/route-path.config';
import { Role } from '@core/enums/role.enum';

const KEY_USER_SESSION = 'ASDFOWEKFOWEPFKWOE';

const URL_BASE = `${environment.apiUrl}/auth`;

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(
        private _httpClient: HttpClient,
        private _router: Router) {
    }

    login(model: LoginRequest): Observable<any> {
        // TODO: Obtener el token como string
        const url = `${URL_BASE}/login`;
        const headers: HttpHeaders = this._authBasic(model.username, model.password);

        return this._httpClient.post<string>(url, null, { headers }).pipe(
            tap(token => this._setUserSession(token)
            ));
    }
    getUserSession(): UserSession {
        const tokenEncoded = localStorage.getItem(KEY_USER_SESSION);
        return new JwtHelperService().decodeToken(tokenEncoded);
    }

    getToken(): string {
        // TODO: devolver sin parse
        return JSON.parse(localStorage.getItem(KEY_USER_SESSION));
    }

    isAuthenticated() {
        const token = localStorage.getItem(KEY_USER_SESSION);
        return token && !new JwtHelperService().isTokenExpired(token);
    }

    logout(): void {
        localStorage.removeItem(KEY_USER_SESSION);
        this._router.navigate([`/${RoutePath.LOGIN}`]);
    }

    hasRoles(roles: Role[]) {
        const sessionRoles = this.getUserSession().roles;
        const intersection = roles.filter(rol => sessionRoles.indexOf(rol) !== -1).length > 0;
    }

    hasRol(rol: Role) {
        const user = this.getUserSession();
        return user.roles?.some(x => x === rol);
    }

    private _setUserSession(token: string) {
        localStorage.setItem(KEY_USER_SESSION, JSON.stringify(token));
    }
    private _authBasic(username: string, password: string) {
        const header = new HttpHeaders().append('Authorization', 'Basic ' + btoa(`${username}:${password}`)); // This class is immutable
        return header;
    }
}

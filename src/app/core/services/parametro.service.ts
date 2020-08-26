import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '@env';
import { KeyParameter } from '@core/constants/key-parameter.constant';
import { AuthService } from './auth.service';
import { Role } from '@core/enums/role.enum';
import { Parametro } from '../models/parametro.model';

const URL_BASE = `${environment.apiUrl}/parametros/privado`;

@Injectable({ providedIn: 'root' })
export class ParametroService {
    constructor(
        private _httpClient: HttpClient,
        private _authService: AuthService
    ) { }

    getForRegisterContratacion(): Observable<any> {
        return this._getParams([KeyParameter.FONDOS_PRESUPUESTALES,
        KeyParameter.OBJETOS_CONTRATACION,
        KeyParameter.ORGANOS_CONTRATANTES,
        KeyParameter.RUBROS,
        KeyParameter.TIPOS_PROCESO]);
    }

    getForRegisterDonacion(): Observable<any> {
        return this._getParams([KeyParameter.TIPOS_DONACION]);
    }

    getRolesAndOrganos(): Observable<any> {
        const user = this._authService.getUserSession();
        const userIsSysadmin = user.roles?.some(x => x === Role.SYS_ADMIN);
        const keyRoles = userIsSysadmin ? KeyParameter.ROLES_FOR_SYS_ADMIN : KeyParameter.ROLES_FOR_ADMIN;
        return this._getParams([keyRoles, KeyParameter.ORGANOS_CONTRATANTES]);
    }

    getEstadosUsuario(): Parametro[] {
        return [
            { codigo: '00', descripcion: 'INACTIVO' },
            { codigo: '01', descripcion: 'ACTIVO' }
        ];
    }

    private _getParams(filters: string[]) {
        const params = new HttpParams()
            .set('filters', JSON.stringify(filters));
        return this._httpClient.get<any>(URL_BASE, { params });
    }
}

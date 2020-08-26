import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { isMoment } from 'moment';
import * as moment from 'moment';

import { DateFormat } from '../configs/date-format.config';
import { environment } from '@env';

const URL_BASE = `${environment.apiUrl}/reporte`;

@Injectable({ providedIn: 'root' })
export class ReportService {

    constructor(private _httpClient: HttpClient) { }

    postReporte(redList: string[], centroList: string[], pFechaInicial, pFechaFinal): Observable<any> {

        const fechaInicial = isMoment(pFechaInicial) ? moment(pFechaInicial).format(DateFormat.YYYYMMDD) : '';
        const fechaFinal = isMoment(pFechaFinal) ? moment(pFechaFinal).format(DateFormat.YYYYMMDD) : '';

        const data = { fechaInicial, fechaFinal, redList, centroList };

        const headers = this.getHeaders();
        const url = `${URL_BASE}/genXlsReporte`;
        return this._httpClient.post(url, JSON.stringify(data), { headers: headers, responseType: 'blob' })
    }

    getHeaders(): HttpHeaders {
        const _headers = new HttpHeaders();
        return _headers.append("Content-Type", "application/json");
    }

}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '@env';

const URL_BASE = `${environment.apiUrl}/reporte`;

@Injectable({ providedIn: 'root' })
export class ReportService {
    constructor(private _httpClient: HttpClient) {}

    postReporte(data: any): Observable<any> {
        const headers = this.getHeaders();
        const url = `${URL_BASE}/genXlsReporte`;
        return this._httpClient.post(url, JSON.stringify(data), {
            headers,
            responseType: 'blob',
        });
    }

    getHeaders(): HttpHeaders {
        const _headers = new HttpHeaders();
        return _headers.append('Content-Type', 'application/json');
    }
}

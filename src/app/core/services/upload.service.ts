import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { EstadoCargaResponse } from '../models/estado-carga-response.model';

const urlBase = `${environment.apiUrl}/upload`;
@Injectable({ providedIn: 'root' })
export class UploadService {
    constructor(
        private _httpClient: HttpClient,
    ) { }

    uploadContratosMasivo(file: File) {
        const url = `${urlBase}/contratos`;
        const formData = new FormData();
        formData.append('file', file);
        return this._httpClient.post<EstadoCargaResponse>(url, formData);
    }

    uploadDonacionesMasivo(file: File) {
        const url = `${urlBase}/donaciones`;
        const formData = new FormData();
        formData.append('file', file);
        return this._httpClient.post<EstadoCargaResponse>(url, formData);
    }

}

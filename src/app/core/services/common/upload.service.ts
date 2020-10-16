import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@env';

const urlBase = `${environment.apiUrl}/upload`;
@Injectable({ providedIn: 'root' })
export class UploadService {
    constructor(
        private _httpClient: HttpClient,
    ) { }

    upload(file: File) {
        const url = `${urlBase}/contratos`;
        const formData = new FormData();
        formData.append('file', file);
        return this._httpClient.post<any>(url, formData);
    }
}

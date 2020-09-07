import { Injectable } from '@angular/core';

import { SecurityService } from './security.service';

@Injectable({
    providedIn: 'root'
})
export class SessionStorageService {

    constructor(
        private _securityService: SecurityService
    ) { }

    setItem<T>(key: string, data: T) {
        let isSucess = false;
        try {
            sessionStorage.setItem(key, JSON.stringify(data));
            isSucess = true;
        } catch (error) {
            console.error('session-storage', error);
        }
        return isSucess;
    }

    getItem<T>(key: string): T {
        let item: T;
        try {
            item = JSON.parse(sessionStorage.getItem(key));

        } catch (error) {
            console.error('session-storage', error);
        }
        return item;
    }

    setEncrypted<T>(key: string, data: T) {
        let isSucess = false;
        try {
            const decrypted = JSON.stringify(data);
            const encrypted = this._securityService.encrypt(decrypted);
            sessionStorage.setItem(key, encrypted);
            isSucess = true;
        } catch (error) {
            console.error('session-storage', error);
        }
        return isSucess;
    }

    getDecrypted<T>(key: string): T {
        let item: T;
        try {
            item = JSON.parse(sessionStorage.getItem(key));
        } catch (error) {
            console.error('session-storage', error);
        }
        return item;
    }
}

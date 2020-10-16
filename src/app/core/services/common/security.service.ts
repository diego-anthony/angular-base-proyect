import { Injectable } from '@angular/core';

import * as CryptoJS from 'crypto-js';

const SECRET_KEY = 'REPLACE_SECURITY_KEY';
@Injectable({ providedIn: 'root' })
export class SecurityService {
    constructor() { }

    encrypt(value: string): string {
        return CryptoJS.AES.encrypt(value, SECRET_KEY).toString();
    }

    decrypt(textToDecrypt: string) {
        return CryptoJS.AES.decrypt(textToDecrypt, SECRET_KEY).toString(CryptoJS.enc.Utf8);
    }
}

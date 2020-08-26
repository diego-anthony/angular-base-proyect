import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _authService: AuthService,
  ) { }

  canActivate(): boolean {
    let result = false;
    if (this._authService.isAuthenticated()) {
      result = true;
    }
    else {
      this._authService.logout();
    }
    return result;
  }

}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoLoginGuard implements CanActivate {

  constructor(
    private _userService: AuthService,
    private _router: Router
  ) { }

  canActivate(): boolean {
    let result = false;
    if (this._userService.isAuthenticated()) {
      this.redirectToHomePage();
    }
    else {
      result = true;
    }
    return result;
  }
  redirectToHomePage() {
    this._router.navigate([`/`]);
  }
}

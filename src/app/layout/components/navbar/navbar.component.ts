import { Component, OnInit } from '@angular/core';

import { AuthService } from '@core/services/common/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  username: string;

  constructor(
    private _authService: AuthService,
  ) { }

  ngOnInit() {
    this._initialize();
  }
  private _initialize() {
  }

  logout() {
    this._authService.logout();
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { RoutePath } from '@core/configs/route-path.config';
import { Role } from '@core/enums/role.enum';

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

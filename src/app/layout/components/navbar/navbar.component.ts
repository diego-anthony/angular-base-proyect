import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { RouteUtil } from '@core/utils/route.util';
import { RoutePath } from '@core/configs/route-path.config';
import { Role } from '@core/enums/role.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  routeHome = RouteUtil.buildAbsoluteRoute('');
  routeUsers = RouteUtil.buildAbsoluteRoute(RoutePath.USUARIOS);
  unsubscribe: Subject<void> = new Subject();
  isDark = true;
  rolUser: Role = Role.USUARIO;
    // TODO: Cargar mediante store
  username: string;

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit() {
    this._initialize();
  }
  private _initialize() {
  }

  logout() {
    this.authService.logout();
  }
}

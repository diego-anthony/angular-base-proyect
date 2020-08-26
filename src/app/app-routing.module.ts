import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { NoLoginGuard } from './core/guards/no-login.guard';
import { LayoutComponent } from './layout/layout.component';
import { RoutePath } from './core/configs/route-path.config';
import { HomeComponent } from '@modules/home/home.component';
import { AuthGuard } from './core/guards/auth.guard';

export const ROUTES: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'login', component: LoginComponent, canActivate: [NoLoginGuard] },
      { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, { useHash: true }),
  ]
})
export class AppRoutingModule { }

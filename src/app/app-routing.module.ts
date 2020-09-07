import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './modules/auth/login/login.component';
import { NoAuthGuard } from './core/guards/no-auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { RoutePath } from './core/configs/route-path.config';
import { HomeComponent } from '@modules/home/home.component';

export const ROUTES: Routes = [
  {
    path: RoutePath.LOGIN, component: LoginComponent, canActivate: [NoAuthGuard],
  },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, { useHash: true }),
  ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoAuthGuard } from '@core/guards/no-auth.guard';
import { AppRoute } from '@core/enums/app-route.enum';
import { LayoutComponent } from '@layout/layout.component';
import { LoginComponent } from '@modules/auth/login/login.component';
import { HomeComponent } from '@modules/home/home.component';

export const ROUTES: Routes = [
  {
    path: AppRoute.LOGIN, component: LoginComponent, canActivate: [NoAuthGuard],
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

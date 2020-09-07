import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Subject, of } from 'rxjs';

import { NotificationService } from '@core/services/notification.service';
import { AuthService } from '@core/services/auth.service';
import { takeUntil, finalize, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import HttpStatusCode from '@core/enums/http-status-code.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup;
  isLoading = false;
  hidePassword = true;
  unsubscribe$: Subject<void> = new Subject();

  get usuarioField() {
    return this.form.get('usuario');
  }

  get passwordField() {
    return this.form.get('password');
  }

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _notificacion: NotificationService,
  ) {}

  ngOnInit() {
    this._createForm();
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  login() {
    if (this.form.valid) {
      this.isLoading = true;
      this._authService.login(this.form.value).pipe(
        takeUntil(this.unsubscribe$),
        finalize(() => this.isLoading = false),
        catchError(error => {
          console.log(error);

          if (error instanceof HttpErrorResponse && error.status === HttpStatusCode.UNAUTHORIZED) {
            this._notificacion.warning('Usuario o contraseña incorrecto');
          }
          return of(error);
        })
      )
        .subscribe(() => this._router.navigate(['/']));
    } else {
      this.form.markAllAsTouched();
    }
  }

  private _createForm() {
    this.form = this._formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}

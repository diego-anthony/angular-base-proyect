import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import LocaleEsPe from '@angular/common/locales/es-PE.js';
import { RouterModule } from '@angular/router';

import { ToastrModule } from 'ngx-toastr';
import { NgxMatDateFnsDateModule } from 'ngx-mat-datefns-date-adapter';
import { NgxSpinnerModule } from 'ngx-spinner';

// Interceptors
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { NotifierInterceptor } from './core/interceptors/notifier.interceptor';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';

// Modules
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './modules/auth/auth.module';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';

// Components
import { HomeComponent } from '@modules/home/home.component';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { AppSettings } from './core/configs/app-settings.config';

registerLocaleData(LocaleEsPe);

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,

    AppRoutingModule,
    ToastrModule.forRoot(AppSettings.TOAST_CONFIG),
    MaterialModule,
    NgxMatDateFnsDateModule,
    NgxSpinnerModule,

    LayoutModule,
    SharedModule,
    AuthModule,
    CoreModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotifierInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    { provide: LOCALE_ID, useValue: 'es-PE' },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { CarouselComponent } from './carousel/carousel.component';
import { EnvironmentIndicatorComponent } from './environment-indicator/environment-indicator.component';

const components = [
  ConfirmDialogComponent,
  CarouselComponent,
  EnvironmentIndicatorComponent,
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: components
})
export class SharedModule { }

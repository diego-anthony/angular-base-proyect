import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';

import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { CarouselComponent } from './carousel/carousel.component';

const components = [
  LoadingIndicatorComponent,
  ConfirmDialogComponent,
  CarouselComponent,
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

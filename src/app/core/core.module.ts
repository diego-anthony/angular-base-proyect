import { NgModule } from '@angular/core';
import { UppercaseInputDirective } from './directives/upper-case-input.directive';
import { LowercaseInputDirective } from './directives/lower-case-input.directive';

const DIRECTIVES = [UppercaseInputDirective, LowercaseInputDirective];

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES]
})
export class CoreModule { }
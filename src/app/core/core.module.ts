import { NgModule } from '@angular/core';

import { UppercaseInputDirective } from './directives/upper-case-input.directive';
import { LowercaseInputDirective } from './directives/lower-case-input.directive';
import { OnlyNumbers } from './directives/only-number.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe';

const DIRECTIVES = [UppercaseInputDirective, LowercaseInputDirective, OnlyNumbers];
const PIPES = [CapitalizePipe];

const SHARED = [
  ...DIRECTIVES, ...PIPES
];

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES]
})
export class CoreModule { }

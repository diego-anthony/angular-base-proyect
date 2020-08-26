import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHoverClasses]'
})
export class HoverClassesDirective {

  constructor(public elementRef: ElementRef) { }

  @Input('appHoverClasses') hoverClasses: string[];

  @HostListener('mouseenter') onMouseEnter() {
    if (this.hoverClasses && this.hoverClasses.length > 0) {
      this.hoverClasses.forEach(item =>
        this.elementRef.nativeElement.classList.add(item)
        );
    }
  }

  @HostListener('mouseleave') onMouseLeave() {

    if (this.hoverClasses && this.hoverClasses.length > 0) {
      this.hoverClasses.forEach(item =>
        this.elementRef.nativeElement.classList.remove(item)
        );
    }
  }
}

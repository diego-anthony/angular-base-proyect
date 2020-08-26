import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {

  position: number = 0;
  total: number = 0;
  unsubscribe$: Subject<void> = new Subject();

  constructor() { }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this._initialize();
  }
  private _initialize() {
    const sliderElem = document.querySelector('.slider');
    const dotElems = sliderElem.querySelectorAll('.slider__dot');
    this.total = dotElems.length;
    const indicatorElem = sliderElem.querySelector('.slider__indicator');

    Array.prototype.forEach.call(dotElems, (dotElem) => {

      dotElem.addEventListener('click', () => {

        this.position = parseInt(sliderElem.getAttribute('data-pos'));
        let newPos = parseInt(dotElem.getAttribute('data-pos'));
        this._move(indicatorElem, sliderElem, newPos);


      })

    });

    interval(7000).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(() => {
      if (this.position >= this.total - 1) {
        this.position = 0;
      } else {
        this.position++;
      }
      this._move(indicatorElem, sliderElem, this.position);
    }
    );
  }

  private _move(indicatorElem, sliderElem, newPos) {
    let newDirection = (newPos > this.position ? 'right' : 'left');
    let currentDirection = (newPos < this.position ? 'right' : 'left');

    indicatorElem.classList.remove(`slider__indicator--${currentDirection}`);
    indicatorElem.classList.add(`slider__indicator--${newDirection}`);
    sliderElem.setAttribute('data-pos', newPos + '');
  }

}

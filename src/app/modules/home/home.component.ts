import { Component, OnInit, OnDestroy } from '@angular/core';

import { RoutePath } from '@core/configs/route-path.config';
import { RouteUtil } from '@core/utils/route.util';

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

declare var ol: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
  ) { }

  ngOnInit() {

  }
  ngOnDestroy(): void {
  }
}

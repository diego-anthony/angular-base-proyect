import { Component, OnInit, OnDestroy } from '@angular/core';

import { RoutePath } from '@core/configs/route-path.config';
import { RouteUtil } from '@core/utils/route.util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  routeContrataciones = RouteUtil.buildAbsoluteRoute(RoutePath.CONTRATACIONES);
  routeDonaciones = RouteUtil.buildAbsoluteRoute(RoutePath.DONACIONES);
  routePresupuesto = RouteUtil.buildAbsoluteRoute(RoutePath.PRESUPUESTO);

  constructor(
  ) { }

  ngOnInit() {
  }
  ngOnDestroy(): void {
  }
}

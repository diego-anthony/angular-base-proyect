import { Component } from '@angular/core';

import { SeoService } from '@core/services/common/seo.service';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <ngx-spinner
      bdColor="rgba(0, 0, 0, 0.8)"
      size="medium"
      color="#fff"
      type="ball-clip-rotate"
      [fullScreen]="true"
      ><p style="color: white">Cargando...</p></ngx-spinner
    >
    <app-environment-indicator></app-environment-indicator>
  `,
})
export class AppComponent {
  constructor(private _seoService: SeoService) {}
}

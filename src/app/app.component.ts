import { Component } from '@angular/core';

import { SeoService } from '@core/services/common/seo.service';

@Component({
    selector: 'app-root',
    template: `
    <app-environment-indicator></app-environment-indicator>
    <router-outlet></router-outlet>
    `,
})
export class AppComponent {
    constructor(private _seoService: SeoService) {}
}

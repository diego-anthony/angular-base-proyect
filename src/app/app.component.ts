import { Component } from '@angular/core';
import { SeoService } from '@core/services/seo.service';

@Component({
  selector: 'app-root',
  template:'<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(private _seoService:SeoService){}
}

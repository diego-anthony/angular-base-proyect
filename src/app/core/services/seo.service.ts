import { isPlatformBrowser } from '@angular/common';
import { Injectable, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

import { filter, takeUntil, pluck } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class SeoService implements OnDestroy {
  private readonly destroy$ = new Subject<void>();
  private readonly dom: Document;
  private readonly isBrowser: boolean;
  private linkCanonical: HTMLLinkElement;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) platformId,
    private _title: Title,
    private _meta: Meta

  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.dom = document;

    if (this.isBrowser) {
      this._createCanonicalTag();
    }
    this._setTags();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  trackCanonicalChanges() {
    if (!this.isBrowser) {
      return;
    }

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      takeUntil(this.destroy$),
    )
      .subscribe(() => {
        this.linkCanonical.setAttribute('href', this._getCanonicalUrl());
      });
  }

  private _createCanonicalTag() {
    this.linkCanonical = this.dom.createElement('link');
    this.linkCanonical.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(this.linkCanonical);
    this.linkCanonical.setAttribute('href', this._getCanonicalUrl());
  }
  private _setTags() {
    this.router.events.pipe(
      takeUntil(this.destroy$),
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      pluck('snapshot', 'data')
    )
      .subscribe(data => {
        if (data) {
          this._title.setTitle(data.title);
          const descriptionTag: MetaDefinition = {
            name: 'description',
            content: data.description
          };
          const ogTitleTag: MetaDefinition = {
            property: 'og:title',
            content: data.title
          };
          const ogDescriptionTag: MetaDefinition = {
            property: 'og:description',
            content: data.description
          };
          const ogUrlTag: MetaDefinition = {
            property: 'og:url',
            content: this._getCanonicalUrl()
          };
          this._meta.updateTag(descriptionTag);
          this._meta.updateTag(ogTitleTag);
          this._meta.updateTag(ogDescriptionTag);
          this._meta.updateTag(ogUrlTag);
        }
      });
  }

  private _getCanonicalUrl(): string {
    return this.dom.location.origin + this.dom.location.pathname;
  }
}

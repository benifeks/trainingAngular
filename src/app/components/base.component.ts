import { Component, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';

@Component({
  template: ''
})
export class BaseComponent implements OnDestroy {
  protected _destroy$$: Subject<void> = new Subject();

  public ngOnDestroy() {
    this._destroy$$.next();
  }
}

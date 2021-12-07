import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AppActions from './store/actions/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store) {}

  hideSidebar(): void {
    this.store.dispatch(AppActions.hideSidebar());
  }
}

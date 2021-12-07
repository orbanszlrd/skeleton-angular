import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AppActions from '../../../../store/actions/app.actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(private store: Store) {}

  toggleSidebar() {
    this.store.dispatch(AppActions.toggleSidebar());
  }
}

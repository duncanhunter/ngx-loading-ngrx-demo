import { Component, OnInit } from '@angular/core';
import { State } from '../state/reducers/index';
import { Store } from '@ngrx/store';

import * as layoutActions from './../state/actions/layout.actions';

@Component({
  selector: 'app-test-loading',
  templateUrl: './test-loading.component.html',
  styleUrls: ['./test-loading.component.css']
})
export class TestLoadingComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit() {}

  startGlobalLoading() {
    this.store.dispatch(new layoutActions.ShowGlobalLoadingAction());
    setTimeout(() => {
     this.store.dispatch(new layoutActions.HideGlobalLoadingAction());
    }, 2000);
  }
}

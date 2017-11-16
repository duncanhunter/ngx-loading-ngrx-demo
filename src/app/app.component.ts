import { Component, OnInit } from '@angular/core';
import { State } from './state/reducers/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  globalLoading$: Observable<boolean>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.globalLoading$ = this.store.select(state => state.layout.globalLoading);
  }
}

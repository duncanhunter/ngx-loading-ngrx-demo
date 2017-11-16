import { ActionReducerMap, MemoizedSelector, MetaReducer } from '@ngrx/store';

import * as layout from './layout.reducer';

export interface State {
    layout: layout.LayoutState;
}

export const reducers: ActionReducerMap<State> = {
    layout: layout.reducer
};

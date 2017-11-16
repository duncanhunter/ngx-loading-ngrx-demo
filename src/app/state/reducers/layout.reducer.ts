import * as layout from '../actions/layout.actions';

export interface LayoutState {
  globalLoading: boolean;
}

export const initialState: LayoutState = {
  globalLoading: false
};

export function reducer(state = initialState, action: layout.Actions): LayoutState {
  switch (action.type) {
    case layout.SHOW_GLOBAL_LOADING: {
      return {
          globalLoading: true
      };
    }
    case layout.HIDE_GLOBAL_LOADING: {
      return {
          globalLoading: false
      };
    }

    default: return state;
  }
}


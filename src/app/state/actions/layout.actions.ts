import { Action } from '@ngrx/store';

export const SHOW_GLOBAL_LOADING = '[Layout] Show Loading';
export const HIDE_GLOBAL_LOADING = '[Layout] Hide Loading';

export class ShowGlobalLoadingAction implements Action {
  readonly type = SHOW_GLOBAL_LOADING;
}

export class HideGlobalLoadingAction implements Action {
  readonly type = HIDE_GLOBAL_LOADING;
}

export type Actions =
  | ShowGlobalLoadingAction
  | HideGlobalLoadingAction;

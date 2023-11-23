import { createReducer, on } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

export const initialState: string[] | undefined = ['111', '222'];

const _notificationsReducer = createReducer(
  initialState
  // on(setAvailableFeatures, (state, { features }) => Object.assign({}, state, features) || initialState),
);

export function notificationsReducer(
  state: string[] | undefined,
  action: TypedAction<any>
) {
  return _notificationsReducer(state, action);
}

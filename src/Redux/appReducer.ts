import * as appActions from './appActions';
import * as T from '../Types';
import * as Redux from 'redux';

export const INITIAL_STATE: T.AppState = {
  currentPosition: null,
};

type appReducer_t = Redux.Reducer<T.AppState>;
export const appReducer: appReducer_t =
  (state = INITIAL_STATE, action: appActions.AppAction): T.AppState => {
    switch (action.type) {
      case appActions.AppActionType.LOCATION_UPDATE:
        return {
          ...state,
          currentPosition: {
            latitude: action.payload.latitude,
            longitude: action.payload.longitude,
          },
        };
      case appActions.AppActionType.LOCATION_UPDATE:
        return {
          ...state,
          currentPosition: {
            latitude: action.payload.latitude,
            longitude: action.payload.longitude,
          },
        };
      default:
        return state;
    }
  };

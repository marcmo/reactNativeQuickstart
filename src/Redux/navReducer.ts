import * as actions from './navActions';
import * as T from '../Types';
import * as Redux from 'redux';

export const INITIAL_STATE: T.NavigationState = {
  root: 'onboarding',
};

type navReducer = Redux.Reducer<T.NavigationState>;
export const navReducer: navReducer =
  (state = INITIAL_STATE, action: actions.NavigationAction): T.NavigationState => {
    switch (action.type) {
      case actions.NavigationActionType.ONBOARDING_NEEDED:
        return {
          ...state,
          root: 'onboarding',
        };
      case actions.NavigationActionType.ONBOARDING_COMPLETED:
        return {
          ...state,
          root: 'app',
        };
      default:
        return state;
    }
  };

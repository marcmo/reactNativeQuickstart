import * as Redux from 'redux';
import { persistCombineReducers, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import { RootState } from '../Types';
import { navReducer } from './navReducer';
import { appReducer } from './appReducer';
import { REDUX_PERSIST } from './PersistConfig';

import * as T from '../Types';

const baseReducer: Redux.Reducer<RootState & any> = persistCombineReducers(
  REDUX_PERSIST.storeConfig,
  {
    nav: navReducer,
    app: appReducer,
  },
);

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STATE') {
    state = undefined;
  }
  return baseReducer(state, action);
};
export const myStore: Redux.Store<T.RootState> =
  Redux.createStore(rootReducer);
export const myPersistor = persistStore(myStore);

export default baseReducer;

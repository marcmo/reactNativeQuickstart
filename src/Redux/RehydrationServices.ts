import * as Redux from 'redux';
import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';
import { RootState } from '../Types';
import { REDUX_PERSIST } from './PersistConfig';
import { log } from '../Lib/Logging';

const LOG = log('rehydration');
const updateReducers = (store: Redux.Store<RootState>) => {
  const reducerVersion = REDUX_PERSIST.reducerVersion;

  // Check to ensure latest reducer version
  AsyncStorage.getItem('@quickstartStore:reducerVersion').then((localVersion) => {
    if (localVersion == null) {
      LOG.d(`no previous version of redux state found`);
      persistStore(store);
    } else if (localVersion !== reducerVersion) {
      // Purge store
      LOG.w(`reducer version changed (retrieved: ${localVersion}, reducer: ${reducerVersion}), purging store!`);
      persistStore(store).purge();
      AsyncStorage.setItem('@quickstartStore:reducerVersion', reducerVersion);
    } else {
      persistStore(store);
    }
  }).catch(() => {
    persistStore(store);
    AsyncStorage.setItem('@quickstartStore:reducerVersion', reducerVersion);
  });
};

export default {updateReducers};

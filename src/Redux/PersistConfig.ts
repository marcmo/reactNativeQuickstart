import { PersistConfig } from 'redux-persist';
import { AsyncStorage } from 'react-native';

export const REDUX_PERSIST: {
  active: boolean;
  reducerVersion: string;
  storeConfig: PersistConfig;
} = {
    active: true,
    reducerVersion: '0.2',
    storeConfig: {
      key: 'root',
      storage: AsyncStorage,
      whitelist: ['nav', 'app'],
      debug: true,
    },
  };

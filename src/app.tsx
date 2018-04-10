import * as React from 'react';
import * as Redux from 'redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { View, ActivityIndicator, Platform, ScrollView, StatusBar, Text, StyleSheet, Button } from 'react-native';
import { StackNavigator, DrawerNavigator, SwitchNavigator, SafeAreaView } from 'react-navigation';

import * as T from './Types';
import { myStore, myPersistor } from './Redux';
import { log } from './Lib/Logging';
import Loading from './Navigation/Loading';
import Nav from './Navigation';

const LOG = log('app');

interface SelectorProps {
  getAppState: () => T.RootState;
}
class ScreenSelector extends React.Component<SelectorProps, any> {
  componentWillReceiveProps(nextProps: SelectorProps) {
    LOG.d('ScreenSelector: componentWillReceiveProps', nextProps);
  }
  render() {
    const appState = this.props.getAppState().nav;
    LOG.d('ScreenSelector: render', appState);
    const Comp = Nav(appState.root);
    return <Comp />;
  }
}
class App extends React.Component {

  componentDidMount() {
    LOG.d('componentDidMount');
  }
  componentWillReceiveProps() {
    LOG.d('componentWillReceiveProps');
  }
  render() {
    LOG.d('in App.render, state:', myStore.getState());
    return (
      <Provider store={myStore}>
        <PersistGate loading={<Loading />} persistor={myPersistor}>
          <ScreenSelector getAppState={myStore.getState}/>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;

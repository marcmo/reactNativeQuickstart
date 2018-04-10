import * as React from 'react';
import {
  StackNavigator,
  DrawerNavigator,
  SwitchNavigator,
} from 'react-navigation';
import {
  View,
  ActivityIndicator,
  StatusBar,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';

import { Metrics, Colors, Fonts } from '../Themes';
import MyNavScreen from '../Navigation/MyNavScreen';
import Onboarding from '../Onboarding/Screens';
import { log } from '../Lib/Logging';
const LOG = log('Navigation');

const Screen = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
  },
  containerA: {
    flex: 1,
    backgroundColor: 'green',
  },
  containerB: {
    flex: 1,
    backgroundColor: 'brown',
  },
  button: {
    height: 60,
    width: Screen.width / 2,
    borderRadius: 5,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.coal,
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.snow,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin,
    marginHorizontal: Metrics.section,
  },
});

class AuthLoadingScreen extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('app')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              Try Other
            </Text>
          </TouchableOpacity>
      </View>
    );
  }
}
const A = (props) => {
  LOG.d('A:props:', props);
  return (
    <View style={styles.containerA}>
      <StatusBar barStyle="default" />
      <Text>hello A</Text>
    </View>
  );
};
const B = (props) => {
  LOG.d('B:props:', props);
  return (
    <View style={styles.containerB}>
      <StatusBar barStyle="default" />
      <Text>hello B</Text>
    </View>
  );
};

interface F { (x: any): any; navigationOptions?: any; }
const IntroScreen: F = ({ navigation }) => (
  <Onboarding navigation={navigation} />
);
IntroScreen.navigationOptions = {
  headerTransparent: true,
};

const AppStack = DrawerNavigator({
  Home: {
    screen: MyNavScreen,
  },
  Notifications: {
    screen: A,
  },
});
const IntroStack = StackNavigator({ SignIn: IntroScreen });

const switchNav = (navRoot) => {

  LOG.d(`switchNav, root=${navRoot}`);
  return SwitchNavigator(
    {
      login: AuthLoadingScreen,
      onboarding: IntroStack,
      app: AppStack,
    },
    {
      initialRouteName: navRoot,
    },
  );
};
export default switchNav;

import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import {
  View,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Text,
  StyleSheet,
} from 'react-native';
import {
  SafeAreaView,
} from 'react-navigation';

import * as T from '../Types';
import * as navActions from '../Redux/navActions';
import { Metrics, Colors, Fonts } from '../Themes';

interface MyProps {
  banner: string;
  navigation: any;
  appState: T.AppState;
  navState: T.NavigationState;
  onboardingCompleted: () => void;
  onboardingNeeded: () => void;
}
const Screen = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  margin: {
    ...Platform.select({
      android: {
        marginHorizontal: 50,
        marginVertical: 10,
      },
    }),
  },
  header: {
    ...Fonts.style.h3,
    color: Colors.charcoal,
    marginBottom: Metrics.baseMargin,
  },
  subheader: {
    ...Fonts.style.normal,
    color: Colors.panther,
    marginLeft: Metrics.baseMargin,
    marginVertical: Metrics.baseMargin,
  },
  content: {
    ...Fonts.style.normal,
    color: Colors.charcoal,
    marginLeft: Metrics.doubleBaseMargin,
  },
  button: {
    height: 40,
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
const MyButton = (props) => (
  <TouchableOpacity
    onPress={props.onPress}
    style={styles.button}
  >
    <Text style={styles.buttonText}>
      {props.title}
    </Text>
  </TouchableOpacity>
);

class MyNavScreenUnconnected extends React.Component<MyProps, any> {

  render() {
    const { navigation, banner } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <SafeAreaView forceInset={{ top: 'always' }}>
            <Text>{banner}</Text>
            <MyButton
              onPress={() => this.props.onboardingCompleted()}
              title="onboardingCompeted loggedIn"
            />
            <MyButton
              onPress={() => {
                this.props.onboardingNeeded();
                this.props.navigation.navigate('onboarding');
              }}
              title="reset onboarding"
            />
            <MyButton onPress={() => navigation.goBack(null)} title="Go back" />
            <Text style={styles.header}>appState</Text>
            <Text style={styles.subheader}>appState</Text>
            <Text style={styles.content}>{JSON.stringify(this.props.appState)}</Text>
            <Text style={styles.header}>navState</Text>
            <Text style={styles.subheader}>navState</Text>
            <Text style={styles.content}>{JSON.stringify(this.props.navState)}</Text>
          </SafeAreaView>
          < StatusBar barStyle="default" />
        </ScrollView>
      </View>);
  }
}
const mapStateToProps = (state: T.RootState) => ({
  appState: state.app,
  navState: state.nav,
});
const mapDispatchToProps = (dispatch) => ({
  onboardingCompleted: () => {
    dispatch(navActions.onboardingCompleted());
  },
  onboardingNeeded: () => {
    dispatch(navActions.onboardingNeeded());
  },
});
const MyNavScreen = connect(mapStateToProps, mapDispatchToProps)(MyNavScreenUnconnected);
export default MyNavScreen;

import * as React from 'react';
import {
  StyleSheet,   // CSS-like styles
  Text,         // Renders text
  View,         // Container component
} from 'react-native';
import { Colors } from '../Themes';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from './Swiper';
import { connect } from 'react-redux';

import * as navActions from '../Redux/navActions';
import { RootState } from '../Types';
import { log } from '../Lib/Logging';
const LOG = log('Screens');

interface Props {
  onboardingCompleted: () => () => any;
  navigation: any;
}
class Screens extends React.Component<Props, object> {
  onboardingFinished = () => {
    this.props.onboardingCompleted()();
    this.props.navigation.navigate('app');
  }
  render() {
    return (
      <Swiper
        index={0}
        style={{}}
        onboardingCompleted={this.onboardingFinished}
      >
        {/* First screen */}
        <View style={[styles.slide, { backgroundColor: '#fdcb6e' }]}>
          <Icon name="ios-baseball" {...iconStyles} />
          <Text style={styles.header}>A</Text>
          <Text style={styles.text}>first do this...</Text>
        </View>
        {/* Second screen */}
        <View style={[styles.slide, { backgroundColor: '#00b894' }]}>
          <Icon name="ios-basketball" {...iconStyles} />
          <Text style={styles.header}>B</Text>
          <Text style={styles.text}>then do that...</Text>
        </View>
        {/* Third screen */}
        <View style={[styles.slide, { backgroundColor: '#636e72' }]}>
          <Icon name="ios-leaf" {...iconStyles} />
          <Text style={styles.header}>Go!</Text>
          <Text style={styles.text}>start now</Text>
        </View>
      </Swiper>
    );
  }
}

const iconStyles = {
  size: 100,
  color: '#FFFFFF',
};

const styles = StyleSheet.create({
  // Slide styles
  slide: {
    flex: 1,                    // Take up all screen
    justifyContent: 'center',   // Center vertically
    alignItems: 'center',       // Center horizontally
  },
  // Header styles
  header: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  // Text below header
  text: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: 'center',
  },
});

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch) => ({
  onboardingCompleted: () => () => {
    dispatch(navActions.onboardingCompleted());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Screens);

import React, {Component} from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View } from 'react-native';

import Welcome from './Welcome';

import Url from '../resources/Url';

export default class Auth extends Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    setTimeout(() => this.props.navigation.navigate(userToken ? 'App' : 'Auth'), 3*1000)
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <Url/>
        <Welcome />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
import React from 'react';
import { setCustomText } from 'react-native-global-props';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Auth from './screens/Auth';
import Home from './screens/Home';
import Today from './screens/Today';
import Session from './screens/Session';
import UpdatePrices from './screens/UpdatePrices';
import SetSlots from './screens/SetSlots';

const customTextProps = {
  style: {
    fontSize: 14,
    fontFamily: 'sans-serif-light',
  }
};

setCustomText(customTextProps);

const AppStack = createStackNavigator({
  Home: Home,
  Today: Today,
  Session: Session,
  UpdatePrices: UpdatePrices,
  SetSlots: SetSlots
},{
  defaultNavigationOptions: {
    headerShown: false
  }
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: Auth,
    App: AppStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
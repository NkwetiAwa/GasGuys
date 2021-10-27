import React from 'react';
import { setCustomText } from 'react-native-global-props';
import { SafeAreaView, View, Text } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Auth from './screens/Auth';
import Welcome from './screens/Welcome';
import Guest from './screens/Guest';
import CreateAccount from './screens/CreateAccount';
import SignIn from './screens/SignIn';
import Home from './screens/Home';
import CheckPrices from './screens/CheckPrices';
import Appointments from './screens/Appointments';
import SelectSlot from './screens/SelectSlot';
import PlaceOrder from './screens/PlaceOrder';
import OrderDetails from './screens/OrderDetails';
import TrackAppointment from './screens/TrackAppointment';

const customTextProps = {
  style: {
    fontSize: 14,
    fontFamily: 'sans-serif-light',
  }
};

setCustomText(customTextProps);

const AppStack = createStackNavigator({
  Home: Home,
  Appointments: Appointments,
  CheckPrices: CheckPrices,
  SelectSlot: SelectSlot,
  PlaceOrder: PlaceOrder,
  OrderDetails: OrderDetails,
  TrackAppointment: TrackAppointment
},{
  defaultNavigationOptions: {
    headerShown: false
  }
});

const AuthStack = createStackNavigator(
  {
    Guest: Guest,
    SignIn: SignIn ,
    CreateAccount: CreateAccount ,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        display: 'none',
      },
      headerShown: false
    },
  }
);

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: Auth,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

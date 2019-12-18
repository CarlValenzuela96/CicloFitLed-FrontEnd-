import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import { fromLeft, fromRight } from 'react-navigation-transitions';

const AuthStackNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions:{
      header:null
    }
  },
  Register: {
    screen: Register,
    navigationOptions:{
      header:null
    }
  }
}, {
  initialRouteName: 'Login', 
  transitionConfig: () => Platform.OS === 'android' ? fromRight(150) : null,
});

export default AuthStackNavigator;
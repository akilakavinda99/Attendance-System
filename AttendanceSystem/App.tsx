/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {AppNavigations} from './src/navigations/appNavigations';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigations />
    </NavigationContainer>
  );
}

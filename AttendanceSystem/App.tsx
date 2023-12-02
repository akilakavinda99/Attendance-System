import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppNavigations} from './src/navigations/appNavigations';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigations />
    </NavigationContainer>
  );
}

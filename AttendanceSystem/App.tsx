import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {AppNavigations} from './src/navigations/appNavigations';
import {Provider} from 'react-redux';
import Store from './src/store/store';
import {userDataHandler} from './src/utils/userDataHandler';

export default function App() {
  useEffect(() => {
    userDataHandler();
  }, []);

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <AppNavigations />
      </NavigationContainer>
    </Provider>
  );
}

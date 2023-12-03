import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {AppNavigations} from './src/navigations/appNavigations';
import {Provider} from 'react-redux';
import Store from './src/store/store';
import {userDataHandler} from './src/utils/userDataHandler';
import {userCheckIn, userCheckOut} from './src/firebase/firebaseOperations';
import {FIREBASE_CONSTANTS} from './src/firebase/firebaseConstants';

export default function App() {
  useEffect(() => {
    userDataHandler();
    // userCheckIn(FIREBASE_CONSTANTS.USER_ID);
    // userCheckOut(FIREBASE_CONSTANTS.USER_ID);
  }, []);

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <AppNavigations />
      </NavigationContainer>
    </Provider>
  );
}

import {FIREBASE_CONSTANTS} from '../firebase/firebaseConstants';
import {userCheckIn} from '../firebase/firebaseOperations';
import Store from '../store/store';
import {getUserDataAction} from '../store/userData/userData.actions';
import {errorToast} from './toastMessages';
import {userDataHandler} from './userDataHandler';

export const checkInHandler = async () => {
  try {
    Store.dispatch(getUserDataAction());
    await userCheckIn(FIREBASE_CONSTANTS.USER_ID);
    userDataHandler();
  } catch (error) {
    errorToast('Error checking out');
  }
};

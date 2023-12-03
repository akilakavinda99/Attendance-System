import {FIREBASE_CONSTANTS} from '../firebase/firebaseConstants';
import {userCheckIn} from '../firebase/firebaseOperations';
import {errorToast} from './toastMessages';
import {userDataHandler} from './userDataHandler';

export const checkInHandler = async () => {
  try {
    await userCheckIn(FIREBASE_CONSTANTS.USER_ID);
    userDataHandler();
  } catch (error) {
    errorToast('Error checking out');
  }
};

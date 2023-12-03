import {FIREBASE_CONSTANTS} from '../firebase/firebaseConstants';
import {userCheckOut} from '../firebase/firebaseOperations';
import {errorToast} from './toastMessages';
import {userDataHandler} from './userDataHandler';

export const checkOutHandler = async () => {
  try {
    await userCheckOut(FIREBASE_CONSTANTS.USER_ID);
    userDataHandler();
  } catch (error) {
    errorToast('Error checking out');
  }
};

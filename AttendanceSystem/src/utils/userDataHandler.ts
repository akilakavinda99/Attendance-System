import {FIREBASE_CONSTANTS} from '../firebase/firebaseConstants';
import {getUserData} from '../firebase/firebaseOperations';
import Store from '../store/store';
import {
  getUserDataAction,
  getUserDataFailureAction,
  getUserDataSuccessAction,
} from '../store/userData/userData.actions';

export const userDataHandler = async () => {
  try {
    Store.dispatch(getUserDataAction());
    const userData = await getUserData(FIREBASE_CONSTANTS.USER_ID);
    Store.dispatch(getUserDataSuccessAction(userData));
  } catch (error) {
    Store.dispatch(getUserDataFailureAction(error));
  }
};

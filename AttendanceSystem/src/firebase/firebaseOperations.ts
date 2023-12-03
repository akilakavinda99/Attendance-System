import firestore from '@react-native-firebase/firestore';
import {GetUserDataType} from './firebaseTypes';
import {FIREBASE_CONSTANTS} from './firebaseConstants';
import {errorToast} from '../utils/toastMessages';

export const getUserData = async (documentId: GetUserDataType) => {
  try {
    const user = await firestore()
      .collection(FIREBASE_CONSTANTS.USERS_COLLECTION)
      .doc(documentId.userId)
      .get();
    return user.data();
  } catch (error) {
    errorToast('Error in fetching user data');
  }
};

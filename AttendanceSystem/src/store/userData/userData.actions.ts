import {UserDataConstants} from './userData.constants';

export const getUserDataAction = () => ({
  type: UserDataConstants.GET_USER_DATA,
});

export const getUserDataSuccessAction = (userData: any) => ({
  type: UserDataConstants.GET_USER_DATA_SUCCESS,
  payload: userData,
});

export const getUserDataFailureAction = (error: any) => ({
  type: UserDataConstants.GET_USER_DATA_FAILURE,
  payload: error,
});

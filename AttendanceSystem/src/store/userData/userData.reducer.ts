import {UserDataConstants} from './userData.constants';

const InitialState = {
  loading: null,
  data: null,
  error: null,
  isCheckedIn: null,
  attendances: null,
};
export function userDataReducer(state = InitialState, action: any) {
  switch (action.type) {
    case UserDataConstants.GET_USER_DATA:
      return {
        ...state,
        loading: true,
      };
    case UserDataConstants.GET_USER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        isCheckedIn: action.payload.isCheckedIn,
        attendances: action.payload.attendances,
      };
    case UserDataConstants.GET_USER_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

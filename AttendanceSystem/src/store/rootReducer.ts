import {combineReducers} from 'redux';
import {userDataReducer} from './userData/userData.reducer';
const RootReducer = combineReducers({
  userDataReducer,
});
export default RootReducer;

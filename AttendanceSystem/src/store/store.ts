import {createStore, applyMiddleware} from 'redux';
import RootReducer from './rootReducer';

const Store = createStore(RootReducer);

export default Store;

import counterReducer from './counter';
import loggedReducer from './isLogged';
import productReducer from './productManage';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    products: productReducer,
})

export default allReducers;


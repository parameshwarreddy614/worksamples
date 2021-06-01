import { combineReducers } from 'redux';
import UserReducer from '../reducers/user';
import ProductsReducer from '../reducers/product';
const rootReducer = combineReducers({
    isUserLoggedIn:UserReducer,
    products:ProductsReducer,
    currentProduct:ProductsReducer
});

export default rootReducer;

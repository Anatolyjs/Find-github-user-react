import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import bodyReducer from './body-reducer';
import thunkMiddleWare from 'redux-thunk';

let reducers = combineReducers({
    bodyPage: bodyReducer
})
const store = createStore(reducers, applyMiddleware(thunkMiddleWare))

window.store = store;
export default store;
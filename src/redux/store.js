// redux store is exported from this file
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';

const PRELOADED_STATE = {};

const store = createStore(rootReducer, PRELOADED_STATE);

export default store;

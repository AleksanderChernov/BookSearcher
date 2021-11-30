import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combinedReducers from '../reducers';

export const store = createStore(combinedReducers, applyMiddleware(thunk));
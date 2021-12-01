import { combineReducers } from 'redux';
import booksReducer from './booksReducers';

export const combinedReducers = combineReducers({
  bookItems: booksReducer,
});

import { combineReducers } from 'redux';
import { booksReducer } from './booksReducers';
import { clickedBookReducer } from './clickedBookReducer';

export const combinedReducers = combineReducers({
  bookItems: booksReducer,
  clickedBook: clickedBookReducer,
});

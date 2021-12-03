import { combineReducers } from 'redux';
import { booksReducer } from './booksReducers';
import { clickedBookReducer } from './clickedBookReducer';

export const rootReducer = combineReducers({
  bookItems: booksReducer,
  clickedBook: clickedBookReducer,
});

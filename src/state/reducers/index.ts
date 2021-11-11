import { combineReducers } from "redux";
import booksReducers from './booksReducers';

const combinedReducers = combineReducers({
  bookItems: booksReducers,
});

export default combinedReducers;
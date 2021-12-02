import { Reducer } from 'redux';
import { booksActionList } from '../action-list/action-list';
import { BookItem } from '../models';
import { BooksReducerActions } from '../actions/booksReducerActions';

interface BooksState {
  isLoading: boolean; // Или загрузка идет или нет
  booksData: BookItem[]; // Postman вовращает большой аррей с объектами
  error: string | null; // Ошибка теперь строка
}

const initialState = {
  isLoading: false,
  booksData: [],
  error: null,
};

export const booksReducer:
Reducer<BooksState, BooksReducerActions> = (state = initialState, action): BooksState => {
  if (action) {
    if (action.type === booksActionList.Search) {
      return {
        isLoading: true,
        booksData: [],
        error: null,
      };
    }
    if (action.type === booksActionList.SearchFailed) {
      return {
        isLoading: false,
        booksData: [],
        error: action.payload,
      };
    }
    if (action.type === booksActionList.SearchSuccessful) {
      return {
        isLoading: false,
        booksData: action.payload,
        error: null,
      };
    }

    return state;
  }

  return state;
};

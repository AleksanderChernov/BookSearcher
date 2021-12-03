import { Reducer } from 'redux';
import { BooksActionList } from '../action-list/action-list';
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

// eslint-disable-next-line max-len
export const booksReducer = (state: BooksState = initialState, action: BooksReducerActions): BooksState => {
  switch (action.type) {
    case BooksActionList.Search: {
      return {
        isLoading: true,
        booksData: [],
        error: null,
      };
    }
    case BooksActionList.SearchFailed: {
      return {
        isLoading: false,
        booksData: [],
        error: action.payload,
      };
    }
    case BooksActionList.SearchSuccessful: {
      return {
        isLoading: false,
        booksData: action.payload,
        error: null,
      };
    }
    default: return state;
  }
};

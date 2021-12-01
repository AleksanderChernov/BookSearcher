import { Reducer } from 'redux';
import ActionList from '../action-list/action-list';
import { BookItem } from '../models';
import { Actions } from '../actions/actions';

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

const booksReducer: Reducer<BooksState, Actions> = (state = initialState, action): BooksState => {
  if (action) {
    if (action.type === ActionList.Search) {
      return {
        isLoading: true,
        booksData: [],
        error: null,
      };
    }
    if (action.type === ActionList.SearchFailed) {
      return {
        isLoading: false,
        booksData: [],
        error: action.payload,
      };
    }
    if (action.type === ActionList.SearchSuccessful) {
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

export default booksReducer;

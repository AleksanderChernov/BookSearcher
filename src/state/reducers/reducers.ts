import { ActionList } from '../action-list/action-list';
import { Action } from '../actions/actions';

interface BooksState {
  isLoading: boolean; // Или загрузка идет или нет
  booksData: {}; //Postman вовращает большой объект
  error: {} | null; //Ошибка тоже объект
}

const reducer = (state: BooksState, action: Action): BooksState => {
  if (action) {
    if (action.type === ActionList.Search) {
      return {
        isLoading: true,
        booksData: {},
        error: null,
      }
    }
    if (action.type === ActionList.SearchFailed) {
      return {
        isLoading: false,
        booksData: {},
        error: action.payload,
      }
    }
    if (action.type === ActionList.SearchSuccessful) {
      return {
        isLoading: false,
        booksData: action.payload,
        error: null,
      }
    }
    else {
      return state;
    }
  }
  else {
    return state;
  }
}

export default reducer
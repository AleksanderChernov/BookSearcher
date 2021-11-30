import { ActionList } from '../action-list/action-list';
import { Actions } from '../actions/actions';

interface BooksState {
  isLoading: boolean; // Или загрузка идет или нет
  booksData: BookItem[]; // Postman вовращает большой аррей с объектами
  error: string | null; // Ошибка тоже объект
}

export interface BookItem {
  publishedDate: string;
  author: string;
  authors: string[];
  categories: string[];
  title: string;
  imageLinks: string;
}

const initialState = {
  isLoading: false,
  booksData: [],
  error: null
}

const reducer = (state: BooksState = initialState, action: Actions): BooksState => {
  if (action) {
    if (action.type === ActionList.Search) {
      return {
        isLoading: true,
        booksData: [],
        error: null,
      }
    }
    if (action.type === ActionList.SearchFailed) {
      return {
        isLoading: false,
        booksData: [],
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
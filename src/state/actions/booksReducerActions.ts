import { booksActionList } from '../action-list/action-list';
import { BookItem } from '../models';

interface SearchAction {
  type: booksActionList.Search;
}

interface SearchBooksFail {
  type: booksActionList.SearchFailed;
  payload: string;
}

interface SearchBooksSuccess {
  type: booksActionList.SearchSuccessful;
  payload: BookItem[];
}

export type BooksReducerActions = SearchAction | SearchBooksFail | SearchBooksSuccess;

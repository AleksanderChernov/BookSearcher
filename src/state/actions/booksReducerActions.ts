import { BooksActionList } from '../action-list/action-list';
import { BookItem } from '../models';

interface SearchAction {
  type: BooksActionList.Search;
}

interface SearchBooksFail {
  type: BooksActionList.SearchFailed;
  payload: string;
}

interface SearchBooksSuccess {
  type: BooksActionList.SearchSuccessful;
  payload: BookItem[];
}

export type BooksReducerActions = SearchAction | SearchBooksFail | SearchBooksSuccess;

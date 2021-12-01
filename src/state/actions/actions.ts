import ActionList from '../action-list/action-list';
import { BookItem } from '../models';

interface SearchAction {
  type: ActionList.Search;
}

interface SearchBooksFail {
  type: ActionList.SearchFailed;
  payload: string;
}

interface SearchBooksSuccess {
  type: ActionList.SearchSuccessful;
  payload: BookItem[];
}

export type Actions = SearchAction | SearchBooksFail | SearchBooksSuccess;

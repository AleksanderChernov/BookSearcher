import { ActionList } from '../action-list/action-list'

interface SearchAction {
  type: ActionList.Search;
}

interface SearchBooksFail {
  type: ActionList.SearchFailed;
  payload: {};
}

interface SearchBooksSuccess {
  type: ActionList.SearchSuccessful;
  payload: string[];
}

export type Actions = SearchAction | SearchBooksFail | SearchBooksSuccess;
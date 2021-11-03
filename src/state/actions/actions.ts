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
  payload: {};
}

export type Action = SearchAction | SearchBooksFail | SearchBooksSuccess;
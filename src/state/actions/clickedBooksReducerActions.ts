import { ClickedBooksActionList } from '../action-list/action-list';
import { ClickedBookItem } from '../models';

export interface AddClickedBook {
  type: ClickedBooksActionList.Add,
  payload: ClickedBookItem
}

export interface ClearClickedBook {
  type: ClickedBooksActionList.Clear
}

export type ClickedBooksReducerActions = AddClickedBook | ClearClickedBook

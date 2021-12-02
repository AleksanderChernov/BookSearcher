import { clickedBooksActionList } from '../action-list/action-list';
import { ClickedBookItem } from '../models';

interface AddClikedBook {
  type: clickedBooksActionList.Add,
  payload: ClickedBookItem
}

interface clearClickedBook {
  type: clickedBooksActionList.Clear
}

export type ClickedBooksReducerActions = AddClikedBook | clearClickedBook

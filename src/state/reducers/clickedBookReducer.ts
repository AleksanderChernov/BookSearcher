import { Reducer } from 'react';
import { clickedBooksActionList } from '../action-list/action-list';
import { ClickedBookItem } from '../models';
import { ClickedBooksReducerActions } from '../actions/clickedBooksReducerActions';

interface ClickedBookState {
  ClickedBookData: ClickedBookItem[]
}

const initialClickedBookState = {
  ClickedBookData: [],
};

export const clickedBookReducer:
Reducer<ClickedBookState, ClickedBooksReducerActions> = (
  state = initialClickedBookState,
  action,
): ClickedBookState => {
  if (action) {
    if (action.type === clickedBooksActionList.Add) {
      return {
        ClickedBookData: action.payload,
      };
    }
    if (action.type === clickedBooksActionList.Clear) {
      return {
        ClickedBookData: [],
      };
    }
  }
  return state;
};

import { Reducer } from 'react';
import { clickedBooksActionList } from '../action-list/action-list';
import { ClickedBookItem } from '../models';
import { ClickedBooksReducerActions } from '../actions/clickedBooksReducerActions';

interface ClickedBookState {
  data: ClickedBookItem[]
}

const initialClickedBookState = {
  data: [],
};

export const clickedBookReducer:
Reducer<ClickedBookState, ClickedBooksReducerActions> = (
  state = initialClickedBookState,
  action,
): ClickedBookState => {
  if (action) {
    if (action.type === clickedBooksActionList.Add) {
      return {
        data: action.payload,
      };
    }
    if (action.type === clickedBooksActionList.Clear) {
      return {
        data: [],
      };
    }
  }
  return state;
};

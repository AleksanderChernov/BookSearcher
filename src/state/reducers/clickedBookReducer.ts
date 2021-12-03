import { Reducer } from 'react';
import { ClickedBooksActionList } from '../action-list/action-list';
import { ClickedBookItem } from '../models';
import { ClickedBooksReducerActions } from '../actions/clickedBooksReducerActions';

interface ClickedBookState {
  clickedBookData: ClickedBookItem;
}

const initialClickedBookState = {
  clickedBookData: {} as ClickedBookItem,
};

export const clickedBookReducer = (
  state: ClickedBookState = initialClickedBookState,
  action: ClickedBooksReducerActions,
): ClickedBookState => {
  switch (action.type) {
    case ClickedBooksActionList.Add: {
      return {
        clickedBookData: action.payload,
      };
    }
    case ClickedBooksActionList.Clear: {
      return {
        clickedBookData: {} as ClickedBookItem,
      };
    }
    default: return state;
  }
};

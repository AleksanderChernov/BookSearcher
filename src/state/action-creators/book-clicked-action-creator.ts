import { Dispatch } from 'redux';
import { clickedBooksActionList } from '../action-list/action-list';
import { ClickedBooksReducerActions } from '../actions/clickedBooksReducerActions';
import { ClickedBookItem } from '../models';

export const bindBookInfo = (item: ClickedBookItem[]) => (
  dispatch: Dispatch<ClickedBooksReducerActions>,
) => {
  dispatch({
    type: clickedBooksActionList.Add,
    payload: item,
  });
};

export const clearBookInfo = () => (dipatch: Dispatch<ClickedBooksReducerActions>) => {
  dipatch({
    type: clickedBooksActionList.Clear,
  });
};

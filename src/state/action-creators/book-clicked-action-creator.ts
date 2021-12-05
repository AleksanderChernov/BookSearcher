import { Dispatch } from 'redux';
import { ClickedBooksActionList } from '../action-list/action-list';
import { ClickedBooksReducerActions } from '../actions/clickedBooksReducerActions';
import { ClickedBookItem } from '../models';

export const bindBookInfo = (item: ClickedBookItem) => (
  dispatch: Dispatch<ClickedBooksReducerActions>,
) => dispatch({
  type: ClickedBooksActionList.Add,
  payload: item,
});

export const clearBookInfo = () => (dispatch: Dispatch<ClickedBooksReducerActions>) => dispatch({
  type: ClickedBooksActionList.Clear,
});

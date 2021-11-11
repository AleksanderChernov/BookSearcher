import axios from "axios";

import { ActionList } from "../action-list/action-list";
import { Actions } from '../actions/actions';
import { Dispatch } from 'redux';

/* const dispatch = useDispatch(); */

export const searchForBooks = (item: string) => {
  return async (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionList.Search
    });

    try {
      const { data } = await axios.get('https://books.googleapis.com/books/v1/volumes?', {
        params: {
          q: item,
          maxResults: 40
        }
      });

      const searchResults = data.items.map((items: any) => {
        return items.volumeInfo;
      })

      dispatch({
        type: ActionList.SearchSuccessful,
        payload: searchResults,
      })

    } catch (err: any) {
      dispatch({
        type: ActionList.SearchFailed,
        payload: err.message,
      })
    }
  };
};
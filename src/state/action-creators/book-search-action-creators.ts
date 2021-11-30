import axios from "axios";

import { ActionList } from "../action-list/action-list";
import { Actions } from '../actions/actions';
import { Dispatch } from 'redux';

export const searchForBooks = (item: string, chosenSubject: string, chosenRelevance: string) => {
  return async (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionList.Search
    });

    try {
      const { data } = await
        axios.get('https://books.googleapis.com/books/v1/volumes?q='
          + item
          + '+subject:'
          + chosenSubject
          + '&orderBy='
          + chosenRelevance,
          {
            params: {
              maxResults: 40,
            }
          });
      console.log(data)
      const searchResults = data.items.map((items: any) => {
        return items.volumeInfo;
      })

      dispatch({
        type: ActionList.SearchSuccessful,
        payload: searchResults,
      })

    } catch (err: any) {
      console.log(err.message)
      dispatch({
        type: ActionList.SearchFailed,
        payload: 'По вашему запросу ничего не найдено',
      })
    }
  };
};
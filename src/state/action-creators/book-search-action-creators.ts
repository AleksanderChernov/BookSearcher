import axios from 'axios';
import { Dispatch } from 'redux';
import ActionList from '../action-list/action-list';
import { BooksReducerActions } from '../actions/booksReducerActions';

export const searchForBooks = (
  item: string,
  chosenSubject: string,
  chosenRelevance: string,
) => async (dispatch: Dispatch<BooksReducerActions>) => {
  dispatch({
    type: ActionList.Search,
  });

  try {
    const { data } = await
    axios.get(
      `https://books.googleapis.com/books/v1/volumes?q=${item}+subject:${chosenSubject}&orderBy=${chosenRelevance}`,
      {
        params: {
          maxResults: 40,
        },
      },
    );
    const searchResults = data.items.map((items: any) => items.volumeInfo);

    dispatch({
      type: ActionList.SearchSuccessful,
      payload: searchResults,
    });
  } catch (err: any) {
    dispatch({
      type: ActionList.SearchFailed,
      payload: 'По вашему запросу ничего не найдено',
    });
  }
};

export default searchForBooks;

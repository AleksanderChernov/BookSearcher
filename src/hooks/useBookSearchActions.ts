import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bookSearchActionCreators } from '../state';

export const useBookSearchActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(bookSearchActionCreators, dispatch);
};

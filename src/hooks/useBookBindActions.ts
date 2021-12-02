import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bookClickActionCreators } from '../state';

export const useBookBindActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(bookClickActionCreators, dispatch);
};

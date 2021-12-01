import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { combinedActionCreators } from '../state';

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(combinedActionCreators, dispatch);
};

export default useActions;

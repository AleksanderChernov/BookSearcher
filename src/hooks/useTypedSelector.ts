import { createSelectorHook } from 'react-redux';
import { RootState } from '../state';

const useTypedSelector = createSelectorHook<RootState>();
export default useTypedSelector;

import {
  shallowEqual,
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';
import { RootState } from 'store/types';

const useSelector: TypedUseSelectorHook<RootState> = <TSelected>(
  selector: (state: RootState) => TSelected,
): TSelected => useReduxSelector(selector, shallowEqual);

export default useSelector;

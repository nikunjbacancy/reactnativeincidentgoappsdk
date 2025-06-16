import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
const useAction = action => {
  const dispatch = useDispatch();
  return useCallback((...prop) => dispatch(action(...prop)), [action, dispatch]);
};
export default useAction;
//# sourceMappingURL=useAction.js.map
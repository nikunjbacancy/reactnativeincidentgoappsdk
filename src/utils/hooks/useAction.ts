import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const useAction = (action: Function): any => {
  const dispatch = useDispatch();
  return useCallback((...prop: any) => dispatch(action(...prop)), [
    action,
    dispatch,
  ]);
};

export default useAction;

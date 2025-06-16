import { shallowEqual, useSelector as useReduxSelector } from 'react-redux';
const useSelector = selector => useReduxSelector(selector, shallowEqual);
export default useSelector;
//# sourceMappingURL=useSelector.js.map
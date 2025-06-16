"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactRedux = require("react-redux");
const useAction = action => {
  const dispatch = (0, _reactRedux.useDispatch)();
  return (0, _react.useCallback)((...prop) => dispatch(action(...prop)), [action, dispatch]);
};
var _default = exports.default = useAction;
//# sourceMappingURL=useAction.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactNative = require("react-native");
const useBackButton = handler => {
  (0, _react.useEffect)(() => {
    _reactNative.BackHandler.addEventListener("hardwareBackPress", handler);
    return () => _reactNative.BackHandler.removeEventListener("hardwareBackPress", handler);
  }, [handler]);
};
var _default = exports.default = useBackButton;
//# sourceMappingURL=useBackButton.js.map
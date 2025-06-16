"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../../../assets");
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ProcedureChecklist = ({
  onActionChecked,
  actions
}) => {
  const renderAction = actionInfo => {
    const action = actionInfo.item;
    return /*#__PURE__*/_react.default.createElement(_styles.ItemRow, {
      onPress: () => onActionChecked(action.id, action.name, action.isCompleted)
    }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ItemText, {
      isCompleted: !!action.isCompleted
    }, action.name), action.isCompleted && /*#__PURE__*/_react.default.createElement(_styles.ItemCheckImage, {
      source: _assets.images.icCheck()
    })));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ListContainer, null, /*#__PURE__*/_react.default.createElement(_styles.List, {
    keyExtractor: act => {
      var _act$id;
      return ((_act$id = act.id) === null || _act$id === void 0 ? void 0 : _act$id.toString()) || '';
    },
    data: actions || [],
    extraData: actions,
    renderItem: renderAction
  })));
};
var _default = exports.default = ProcedureChecklist;
//# sourceMappingURL=index.js.map
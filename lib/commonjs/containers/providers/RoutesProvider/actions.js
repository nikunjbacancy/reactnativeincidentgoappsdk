"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showDuressInfoAction = exports.removeScreenAction = exports.hideDuressInfoAction = exports.addScreenAction = void 0;
var _constants = require("./constants");
/**
 *
 * RoutesProvider actions
 *
 */

const addScreenAction = screenAction => ({
  type: _constants.ADD_SCREEN_ACTION,
  payload: screenAction
});
exports.addScreenAction = addScreenAction;
const removeScreenAction = () => ({
  type: _constants.REMOVE_SCREEN_ACTION
});
exports.removeScreenAction = removeScreenAction;
const showDuressInfoAction = () => ({
  type: _constants.SHOW_DURESS_INFO_ACTION
});
exports.showDuressInfoAction = showDuressInfoAction;
const hideDuressInfoAction = () => ({
  type: _constants.HIDE_DURESS_INFO_ACTION
});
exports.hideDuressInfoAction = hideDuressInfoAction;
//# sourceMappingURL=actions.js.map
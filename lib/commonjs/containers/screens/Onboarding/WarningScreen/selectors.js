"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectShowPanicInfo = exports.default = void 0;
var _reselect = require("reselect");
var _reducer = require("./reducer");
const warningScreenStateDomain = state => state.warningScreen || _reducer.initialState;
const makeSelectShowPanicInfo = () => (0, _reselect.createSelector)(warningScreenStateDomain, ({
  showPanicInfo
}) => showPanicInfo);
exports.makeSelectShowPanicInfo = makeSelectShowPanicInfo;
const makeSelectWarningScreenState = () => (0, _reselect.createSelector)(warningScreenStateDomain, subState => subState);
var _default = exports.default = makeSelectWarningScreenState;
//# sourceMappingURL=selectors.js.map
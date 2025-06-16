"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports.default = void 0;
var _immer = _interopRequireDefault(require("immer"));
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 *
 * WelcomeScreen reducer
 *
 */

const initialState = exports.initialState = {
  currentPage: 0,
  welcomeItems: [{
    index: 0,
    titleKey: 'emergencyTitle',
    textKey: 'emergencyText',
    imageKey: 'welcomeEmergencyCall'
  }, {
    index: 1,
    titleKey: 'liveTitle',
    textKey: 'liveText',
    imageKey: 'welcomeNotify'
  }, {
    index: 2,
    titleKey: 'safetyTitle',
    textKey: 'safetyText',
    imageKey: 'welcomeMap'
  }, {
    index: 3,
    titleKey: 'panicTitle',
    textKey: 'panicText',
    imageKey: 'welcomeTimer'
  }, {
    index: 4,
    titleKey: 'tipTitle',
    textKey: 'tipText',
    imageKey: 'welcomeTimer'
  }]
};
const welcomeScreenReducer = (0, _immer.default)((draft, action) => {
  switch (action.type) {
    case _constants.CHANGE_PAGE:
      draft.currentPage = action.payload;
      break;
    case _constants.NEXT_PAGE:
      draft.currentPage += 1;
      break;
    case _constants.RESET_CURRENT_PAGE:
      draft.currentPage = 0;
      break;
    default:
  }
}, initialState);
var _default = exports.default = welcomeScreenReducer;
//# sourceMappingURL=reducer.js.map
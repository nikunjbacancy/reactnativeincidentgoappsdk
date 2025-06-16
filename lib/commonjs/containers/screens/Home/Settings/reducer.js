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
 * Settings reducer
 *
 */

const initialState = exports.initialState = {
  beaconRegisteredData: {
    flag: false,
    message: ''
  },
  isLoading: false
};
const settingsScreenReducer = (0, _immer.default)((draft, action) => {
  switch (action.type) {
    case _constants.BEACON_REGISTRATION_SUCCESS:
      draft.beaconRegisteredData = action.payload;
      draft.isLoading = false;
      break;
    case _constants.BEACON_REGISTRATION_FAILURE:
      // draft.creatingTip = false;
      break;
    default:
  }
}, initialState);
var _default = exports.default = settingsScreenReducer;
//# sourceMappingURL=reducer.js.map
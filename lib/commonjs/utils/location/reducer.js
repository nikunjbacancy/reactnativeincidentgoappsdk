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
 * EscortTypeScreen reducer
 *
 */

const initialState = exports.initialState = {
  isLoading: false,
  payload: undefined
};
const geofenceReducer = (0, _immer.default)((draft, action) => {
  switch (action.type) {
    case _constants.GET_ALL_GEOFENCS_REQUEST:
      draft.isLoading = true;
      break;
    case _constants.GET_ALL_GEOFENCS_SUCCESS:
      draft.isLoading = false;
      draft.payload = action.payload;
      break;
    case _constants.GET_ALL_GEOFENCS_FAILURE:
      draft.isLoading = false;
      draft.payload = null;
      break;
    case _constants.SET_SITE_KEY_LOCATION_SUCCESS:
      draft.isLoading = false;
      draft.payload = action.payload;
      break;
    case _constants.SET_SITE_KEY_LOCATION_FAILURE:
      draft.isLoading = true;
      draft.payload = null;
      break;
    default:
      break;
  }
}, initialState);
var _default = exports.default = geofenceReducer;
//# sourceMappingURL=reducer.js.map
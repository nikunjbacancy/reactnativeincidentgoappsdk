"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports.default = void 0;
var _immer = _interopRequireDefault(require("immer"));
var _constants = require("../VideoRecordScreen/constants");
var _constants2 = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 *
 * SelectCategoryScreen reducer
 *
 */

const initialState = exports.initialState = {
  category: undefined
};
const incidentCategoryScreenReducer = (0, _immer.default)((draft, action) => {
  switch (action.type) {
    case _constants2.SELECT_INCIDENT_CATEGORY:
      draft.category = action.payload;
      break;
    case _constants.DELETE_INCIDENT_SUCCESS:
      draft.category = undefined;
      break;
    default:
  }
}, initialState);
var _default = exports.default = incidentCategoryScreenReducer;
//# sourceMappingURL=reducer.js.map
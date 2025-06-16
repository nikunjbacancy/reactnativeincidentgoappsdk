"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectIncidentCategory = void 0;
var _constants = require("./constants");
/**
 *
 * SelectCategoryScreen actions
 *
 */

const selectIncidentCategory = category => ({
  type: _constants.SELECT_INCIDENT_CATEGORY,
  payload: category
});
exports.selectIncidentCategory = selectIncidentCategory;
//# sourceMappingURL=actions.js.map
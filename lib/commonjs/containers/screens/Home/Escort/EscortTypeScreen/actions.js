"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleEscortType = exports.showSiteKeyModal = exports.hideSiteKeyModal = void 0;
var _constants = require("./constants");
/**
 *
 * EscortTypeScreen actions
 *
 */

const toggleEscortType = type => ({
  type: _constants.TOGGLE_ESCORT_TYPE,
  payload: type
});
exports.toggleEscortType = toggleEscortType;
const showSiteKeyModal = () => ({
  type: _constants.SHOW_SITE_KEY_MODAL
});
exports.showSiteKeyModal = showSiteKeyModal;
const hideSiteKeyModal = () => ({
  type: _constants.HIDE_SITE_KEY_MODAL
});
exports.hideSiteKeyModal = hideSiteKeyModal;
//# sourceMappingURL=actions.js.map
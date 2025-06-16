"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetCurrentPage = exports.nextPage = exports.finishWelcome = exports.changePage = void 0;
var _constants = require("./constants");
/**
 *
 * WelcomeScreen actions
 *
 */

const changePage = index => ({
  type: _constants.CHANGE_PAGE,
  payload: index
});
exports.changePage = changePage;
const nextPage = () => ({
  type: _constants.NEXT_PAGE
});
exports.nextPage = nextPage;
const finishWelcome = () => ({
  type: _constants.FINISH_WELCOME
});
exports.finishWelcome = finishWelcome;
const resetCurrentPage = () => ({
  type: _constants.RESET_CURRENT_PAGE
});
exports.resetCurrentPage = resetCurrentPage;
//# sourceMappingURL=actions.js.map
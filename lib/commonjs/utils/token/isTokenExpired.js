"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const isTokenExpired = token => {
  if (token.expires_at) {
    return token.expires_at <= Date.now();
  }
  // if there is no expire time, the token is never expire
  return false;
};
var _default = exports.default = isTokenExpired;
//# sourceMappingURL=isTokenExpired.js.map
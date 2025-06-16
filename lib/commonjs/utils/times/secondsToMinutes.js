"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const secondsToMinutes = seconds => {
  if (!seconds) return '00:00';
  const minutes = Math.floor(seconds / 60);
  const newSeconds = Math.floor(seconds - minutes * 60);
  const formatMinutes = `${`${minutes}`.length < 2 ? '0' : ''}${minutes}`;
  const formatSeconds = `${`${newSeconds}`.length < 2 ? '0' : ''}${newSeconds}`;
  return `${formatMinutes}:${formatSeconds}`;
};
var _default = exports.default = secondsToMinutes;
//# sourceMappingURL=secondsToMinutes.js.map
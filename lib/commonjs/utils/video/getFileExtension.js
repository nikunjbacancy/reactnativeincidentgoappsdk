"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const getFileExtension = path => {
  if (path == null) return '';
  const lastIndex = path.lastIndexOf('.');
  if (lastIndex > -1) {
    return path.substr(lastIndex + 1);
  }
  return '';
};
var _default = exports.default = getFileExtension;
//# sourceMappingURL=getFileExtension.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecordType = exports.PanicMode = exports.EscortState = void 0;
/* eslint-disable import/prefer-default-export */
/**
 *
 * RecordScreen types
 *
 */
let EscortState = exports.EscortState = /*#__PURE__*/function (EscortState) {
  EscortState["Started"] = "Started";
  EscortState["Finished"] = "Finished";
  return EscortState;
}({});
let RecordType = exports.RecordType = /*#__PURE__*/function (RecordType) {
  RecordType["Video"] = "Video";
  RecordType["Audio"] = "Audio";
  return RecordType;
}({});
let PanicMode = exports.PanicMode = /*#__PURE__*/function (PanicMode) {
  PanicMode["Active"] = "Active";
  PanicMode["Inactive"] = "Inactive";
  return PanicMode;
}({});
//# sourceMappingURL=types.js.map
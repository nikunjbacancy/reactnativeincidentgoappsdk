"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _sdkConfigs = require("../../sdkConfigs");
const getVersion = () => `${_sdkConfigs.sdkConfigs.configs.version_name}-${_sdkConfigs.sdkConfigs.configs.version_code}`;
var _default = exports.default = getVersion;
//# sourceMappingURL=getVersion.js.map
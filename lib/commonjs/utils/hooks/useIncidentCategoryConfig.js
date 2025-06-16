"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _selectors = require("../../containers/app/selectors");
var _find = _interopRequireDefault(require("lodash/find"));
var _useSelector = _interopRequireDefault(require("./useSelector"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const unknownIncidentCategory = {
  name: 'unknown',
  display: 'Unknown',
  notificationName: 'Unknown',
  imageUrl: '',
  backgroundColor: '#444964',
  backgroundGradientColors: ['#444964', '#444964'],
  order: 0,
  enabled: true
};
const useIncidentCategoryConfig = category => {
  const configs = (0, _useSelector.default)((0, _selectors.makeSelectConfigs)());
  return (0, _find.default)(configs.incidentCategories, {
    name: category
  }) || unknownIncidentCategory;
};
var _default = exports.default = useIncidentCategoryConfig;
//# sourceMappingURL=useIncidentCategoryConfig.js.map
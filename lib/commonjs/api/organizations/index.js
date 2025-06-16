"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endpoints = exports.default = void 0;
var _axios = _interopRequireDefault(require("../axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const endpoints = exports.endpoints = {
  organizations: 'organizations'
};
var _default = exports.default = {
  getOrganizations: (keyword = '') => _axios.default.get(`${endpoints.organizations}?filter[name][$regex]=${keyword}`),
  getOrganization: id => _axios.default.get(`${endpoints.organizations}/${id}/info`),
  getOrganizationProcedures: id => _axios.default.get(`${endpoints.organizations}/${id}/procedures`),
  getUserOrganizations: () => _axios.default.get(`${endpoints.organizations}/app`),
  findIntersectOrganizations: point => _axios.default.post(`${endpoints.organizations}/intersects`, point),
  findOrganizationArea: async (id, point) => _axios.default.post(`${endpoints.organizations}/${id}/intersects`, point)
};
//# sourceMappingURL=index.js.map
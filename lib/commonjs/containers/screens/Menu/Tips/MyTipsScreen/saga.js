"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = myTipsScreenSaga;
var api = _interopRequireWildcard(require("../../../../../api"));
var _effects = require("redux-saga/effects");
var _error = require("../../../../../utils/error");
var _actions = require("./actions");
var _constants = require("./constants");
var _selectors = require("./selectors");
var _types = require("./types");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 *
 * MyTipsScreen saga
 *
 */

function* getTips({
  payload
}) {
  yield (0, _effects.spawn)(getTipsInParallel, payload);
}
function* getTipsInParallel(payload) {
  const {
    tipStatus,
    paging
  } = payload;
  const tips = yield (0, _effects.select)((0, _selectors.makeSelectTips)());
  const query = {
    pagination: paging ? {
      index: tips[tipStatus].pageIndex
    } : {
      index: 0
    },
    filter: {
      isResolved: tipStatus === _types.TipStatus.Closed
    }
  };
  try {
    var _response$data$pagina;
    const response = yield (0, _effects.call)(api.incidents.getIncidents, query);
    yield (0, _effects.put)((0, _actions.setHasMoreData)({
      data: ((_response$data$pagina = response.data.pagination) === null || _response$data$pagina === void 0 ? void 0 : _response$data$pagina.hasMore) || false,
      tipStatus
    }));
    if (paging) {
      yield (0, _effects.put)((0, _actions.addPageIndex)(tipStatus));
    }
    yield (0, _effects.put)((0, _actions.getTipsSuccess)({
      data: response.data.data || [],
      tipStatus,
      paging
    }));
  } catch (error) {
    yield (0, _effects.put)((0, _actions.getTipsFailure)((0, _error.handleError)(error)));
  }
}
function* myTipsScreenSaga() {
  yield (0, _effects.takeLatest)(_constants.GET_TIPS_REQUEST, getTips);
}
//# sourceMappingURL=saga.js.map
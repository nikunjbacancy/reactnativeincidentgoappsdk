"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _api = require("../../../../../api");
var _assets = require("../../../../../assets");
var _components = require("../../../../../components");
var _screens = _interopRequireDefault(require("../../../../../containers/providers/RoutesProvider/screens"));
var _filter = _interopRequireDefault(require("lodash/filter"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNavigation = require("react-navigation");
var _hooks = require("../../../../../utils/hooks");
var _navigation = _interopRequireDefault(require("../../../../../utils/navigation"));
var _notification = require("../../../../../utils/notification");
var _actions = require("./actions");
var _NoData = _interopRequireDefault(require("./NoData"));
var _selectors = require("./selectors");
var _styles = require("./styles");
var _TipItem = _interopRequireDefault(require("./TipItem"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const MyTipsScreen = ({
  isFocused,
  navigation: {
    getParam
  }
}) => {
  const tipStatus = getParam('tipStatus');
  const [badges, setBadges] = (0, _react.useState)([]);
  const getTipsRequestAction = (0, _hooks.useAction)(_actions.getTipsRequest);
  const tips = (0, _hooks.useSelector)((0, _selectors.makeSelectTips)());
  const isLoading = (0, _hooks.useSelector)((0, _selectors.makeSelectIsLoading)());
  (0, _react.useEffect)(() => {
    getTipsRequestAction({
      tipStatus,
      paging: false
    });
  }, [isFocused, tipStatus]);
  (0, _react.useEffect)(() => {
    (0, _notification.getBadges)().then(notificationBadges => {
      setBadges(notificationBadges);
    });
    const onIncidentUpdated = () => {
      getTipsRequestAction({
        tipStatus,
        paging: false
      });
    };
    const notificationAdded = notificationBadges => {
      setBadges(notificationBadges);
    };
    _api.event.on(_api.AppEvent.OnNotificationBadge, notificationAdded);
    _api.event.on(_api.AppEvent.OnIncidentUpdated, onIncidentUpdated);
    return function componentDidUnMount() {
      _api.event.off(_api.AppEvent.OnNotificationBadge, notificationAdded);
      _api.event.off(_api.AppEvent.OnIncidentUpdated, onIncidentUpdated);
    };
  }, [setBadges]);
  const onEndReached = (0, _react.useCallback)(() => {
    if (tips[tipStatus].hasMoreData) {
      getTipsRequestAction({
        tipStatus,
        paging: true
      });
    }
  }, [tips, tipStatus]);
  const goToTipDetail = incident => {
    _navigation.default.navigate(_screens.default.Menu.Tips.TipDetail, {
      incident
    });
  };
  const renderReportItem = ({
    item
  }) => {
    var _item$id;
    return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      onPress: () => goToTipDetail(item)
    }, /*#__PURE__*/_react.default.createElement(_TipItem.default, {
      badges: (0, _filter.default)(badges, b => b === (item === null || item === void 0 ? void 0 : item.id)),
      key: item === null || item === void 0 || (_item$id = item.id) === null || _item$id === void 0 ? void 0 : _item$id.toString(),
      incident: item
    }));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.List, {
    data: tips[tipStatus].data,
    keyExtractor: item => {
      var _item$id2;
      return ((_item$id2 = item.id) === null || _item$id2 === void 0 ? void 0 : _item$id2.toString()) || '';
    },
    renderItem: renderReportItem,
    ListEmptyComponent: isLoading ? /*#__PURE__*/_react.default.createElement(_components.LoadingIndicator, null) : /*#__PURE__*/_react.default.createElement(_NoData.default, null),
    onEndReached: onEndReached,
    onEndReachedThreshold: 2
  })), /*#__PURE__*/_react.default.createElement(_styles.BackButtonRow, null, /*#__PURE__*/_react.default.createElement(_components.ScreenActionButton, {
    onCancel: () => _navigation.default.navigate(_screens.default.Home.Escort.EscortType),
    tintColor: _assets.colors.white
  }))));
};
var _default = exports.default = (0, _reactNavigation.withNavigationFocus)(MyTipsScreen);
//# sourceMappingURL=index.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../../assets");
var _components = require("../../../../../components");
var _screens = _interopRequireDefault(require("../../../../../containers/providers/RoutesProvider/screens"));
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _reactNavigation = require("react-navigation");
var _device = require("../../../../../utils/device");
var _hooks = require("../../../../../utils/hooks");
var _navigation = _interopRequireDefault(require("../../../../../utils/navigation"));
var _actions = require("./actions");
var _messages = _interopRequireDefault(require("./messages"));
var _selectors = require("./selectors");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const EscortScreen = ({
  isFocused,
  navigation
}) => {
  const isSafetyTimer = navigation.getParam('safetyTimer');
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const [isKeyboardShow, setIsKeyboardShow] = (0, _react.useState)(false);
  const [checkedOrg, setCheckedOrg] = (0, _react.useState)(null);
  const organizations = (0, _hooks.useSelector)((0, _selectors.makeSelectIntersectOrganizations)());
  const organization = (0, _hooks.useSelector)((0, _selectors.makeSelectSelectedOrganization)());
  const procedures = (0, _hooks.useSelector)((0, _selectors.makeSelectOrganizationProcedures)());
  const procedure = (0, _hooks.useSelector)((0, _selectors.makeSelectSelectedProcedure)());
  const nextButtonEnabled = (0, _hooks.useSelector)((0, _selectors.makeSelectEnableNextButton)());
  const error = (0, _hooks.useSelector)((0, _selectors.makeSelectError)());
  const errorMessage = (0, _hooks.useSelector)((0, _selectors.makeSelectErrorMessage)());
  const requestingOrganizations = (0, _hooks.useSelector)((0, _selectors.makeSelectRequestingOrganizations)());
  console.log("=requestingOrganizations===>", requestingOrganizations);
  const toggleSelectOrganizationAction = (0, _hooks.useAction)(_actions.toggleSelectOrganization);
  const toggleSelectProcedureAction = (0, _hooks.useAction)(_actions.toggleSelectProcedure);
  const getIntersectOrganizationsAction = (0, _hooks.useAction)(_actions.getIntersectOrganizationsRequest);
  const getOrganizationProceduresAction = (0, _hooks.useAction)(_actions.getOrganizationProceduresRequest);
  const goToSelectProcedure = () => {
    if (checkedOrg) {
      toggleSelectOrganizationAction(checkedOrg);
      if (!isSafetyTimer) {
        getOrganizationProceduresAction(checkedOrg);
      } else {
        goToSafetyTimerCountdown();
      }
    }
  };
  const goToCountdownAction = () => {
    _navigation.default.navigate(_screens.default.Home.Escort.Countdown, {
      procedure,
      organization
    });
  };
  const goToSafetyTimerCountdown = () => {
    _navigation.default.navigate(_screens.default.Home.Escort.Countdown, {
      procedure,
      organization,
      isSafetyTimer
    });
  };
  const procedureSelectionBack = () => {
    toggleSelectProcedureAction(null);
    toggleSelectOrganizationAction(null);
    if (organizations && organizations.length <= 1) {
      _navigation.default.navigate(_screens.default.Home.Escort.EscortType);
    }
  };
  (0, _react.useEffect)(() => {
    console.log("organization====>", organization);
    console.log("isSafetyTimer====>", isSafetyTimer);
    if (organization && isSafetyTimer) {
      goToSafetyTimerCountdown();
    }
  }, [organization, isSafetyTimer]);
  (0, _react.useEffect)(() => {
    if (isFocused) {
      getIntersectOrganizationsAction();
      let subscriptions;
      subscriptions = [_reactNative.Keyboard.addListener('keyboardDidShow', () => setIsKeyboardShow(true)), _reactNative.Keyboard.addListener('keyboardDidHide', () => setIsKeyboardShow(false))];
      return () => {
        subscriptions.forEach(s => {
          var _s$remove;
          return s === null || s === void 0 || (_s$remove = s.remove) === null || _s$remove === void 0 ? void 0 : _s$remove.call(s);
        });
      };
    } else {
      return () => {};
    }
  }, [isFocused]);
  (0, _react.useEffect)(() => {
    if ((organizations === null || organizations === void 0 ? void 0 : organizations.length) === 1) {
      const {
        id
      } = organizations[0];
      if (id !== checkedOrg) {
        setCheckedOrg(id);
        toggleSelectOrganizationAction(id);
        if (!isSafetyTimer) {
          getOrganizationProceduresAction(id);
        }
      }
    }
  }, [organizations === null || organizations === void 0 ? void 0 : organizations.length]);
  const call911 = (0, _react.useCallback)(() => (0, _device.makeCall)('911'), []);
  if (requestingOrganizations) return /*#__PURE__*/_react.default.createElement(_components.LoadingIndicator, null);
  const renderTimedHeader = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.Header, {
    title: formatMessage(_messages.default.timedTitle)
  }), /*#__PURE__*/_react.default.createElement(_styles.InfoRow, null, /*#__PURE__*/_react.default.createElement(_styles.InfoText, null, formatMessage(_messages.default.timedInfo))), error && /*#__PURE__*/_react.default.createElement(_styles.ErrorRow, null, /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, null, errorMessage)));
  const renderSafetyHeader = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.Header, {
    title: formatMessage(_messages.default.safetyTitle)
  }), /*#__PURE__*/_react.default.createElement(_styles.InfoRow, null, /*#__PURE__*/_react.default.createElement(_styles.InfoText, null, formatMessage(_messages.default.safetyInfo))), error && /*#__PURE__*/_react.default.createElement(_styles.ErrorRow, null, /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, null, errorMessage)));
  const renderItem = itemInfo => {
    const org = itemInfo.item;
    return /*#__PURE__*/_react.default.createElement(_styles.ItemRow, {
      onPress: () => setCheckedOrg(org.id)
    }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, org.id === checkedOrg && /*#__PURE__*/_react.default.createElement(_styles.ItemCheckImage, {
      source: _assets.images.icCheck()
    }), /*#__PURE__*/_react.default.createElement(_styles.ItemText, null, `${org.name}`)));
  };
  const renderOrganizations = () => {
    console.log("organizations=>", organizations);
    if ((0, _isEmpty.default)(organizations)) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.Header, {
        title: isSafetyTimer ? formatMessage(_messages.default.safetyTitle) : formatMessage(_messages.default.timedTitle)
      }), /*#__PURE__*/_react.default.createElement(_styles.Call911Container, null, /*#__PURE__*/_react.default.createElement(_styles.Call911Title, null, isSafetyTimer ? formatMessage(_messages.default.safetyCall911Title) : formatMessage(_messages.default.timedCall911Title)), /*#__PURE__*/_react.default.createElement(_styles.Call911Info, null, formatMessage(_messages.default.call911Info)), /*#__PURE__*/_react.default.createElement(_styles.Call911Button, {
        text: formatMessage(_messages.default.call911),
        onPress: call911
      })));
    }
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isSafetyTimer ? renderSafetyHeader() : renderTimedHeader(), /*#__PURE__*/_react.default.createElement(_styles.List, {
      keyExtractor: org => {
        var _org$id;
        return (org === null || org === void 0 || (_org$id = org.id) === null || _org$id === void 0 ? void 0 : _org$id.toString()) || '';
      },
      data: organizations || []
      // extraData={organizations}
      ,
      renderItem: renderItem
    }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        marginTop: 'auto'
      }
    }), /*#__PURE__*/_react.default.createElement(_styles.NextButtonRow, null, /*#__PURE__*/_react.default.createElement(_components.ScreenActionButton, {
      disabled: !checkedOrg,
      text: isSafetyTimer ? formatMessage(_messages.default.next) : formatMessage(_messages.default.selectProcedure),
      onPress: goToSelectProcedure,
      onCancel: _navigation.default.back
    })));
  };

  // TODO: refactor renderHeader to work for both scenarios
  const renderProcedureSelection = () => {
    const renderedProcedures = (procedures === null || procedures === void 0 ? void 0 : procedures.filter(p => p.organization === (organization === null || organization === void 0 ? void 0 : organization.id))) || [];
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.Header, {
      title: formatMessage(_messages.default.timedTitle)
    }), /*#__PURE__*/_react.default.createElement(_styles.InfoRow, null, /*#__PURE__*/_react.default.createElement(_styles.InfoText, null, formatMessage(_messages.default.procedureSelection))), error && /*#__PURE__*/_react.default.createElement(_styles.ErrorRow, null, /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, null, errorMessage)), !renderedProcedures.length && /*#__PURE__*/_react.default.createElement(_styles.InfoRow, null, /*#__PURE__*/_react.default.createElement(_styles.InfoText, null, formatMessage(_messages.default.noProcedures))), procedures && /*#__PURE__*/_react.default.createElement(_styles.ProcedureList, {
      keyExtractor: proc => {
        var _proc$id;
        return ((_proc$id = proc.id) === null || _proc$id === void 0 ? void 0 : _proc$id.toString()) || '';
      },
      data: renderedProcedures,
      extraData: renderedProcedures,
      renderItem: renderProcedure
    }), /*#__PURE__*/_react.default.createElement(_styles.NextButtonRow, null, /*#__PURE__*/_react.default.createElement(_components.ScreenActionButton, {
      disabled: !nextButtonEnabled,
      text: formatMessage(_messages.default.next),
      onPress: goToCountdownAction,
      onCancel: procedureSelectionBack
    })));
  };
  const renderProcedure = itemInfo => {
    const proced = itemInfo.item;
    return /*#__PURE__*/_react.default.createElement(_styles.ItemRow, {
      onPress: () => toggleSelectProcedureAction(proced.id)
    }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, proced.isSelected && /*#__PURE__*/_react.default.createElement(_styles.ItemCheckImage, {
      source: _assets.images.icCheck()
    }), /*#__PURE__*/_react.default.createElement(_styles.ItemText, null, proced.name)));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Container, {
    isKeyboard: isKeyboardShow
  }, organization ? renderProcedureSelection() : renderOrganizations())));
};
var _default = exports.default = (0, _reactNavigation.withNavigationFocus)(EscortScreen);
//# sourceMappingURL=index.js.map
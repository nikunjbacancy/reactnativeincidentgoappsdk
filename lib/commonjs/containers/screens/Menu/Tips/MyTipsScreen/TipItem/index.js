"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../../../assets");
var _components = require("../../../../../../components");
var _incidentCodeCore = require("incident-code-core");
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _hooks = require("../../../../../../utils/hooks");
var _location = require("../../../../../../utils/location");
var _string = require("../../../../../../utils/string");
var _MapSnapshot = _interopRequireDefault(require("../MapSnapshot"));
var _messages = _interopRequireDefault(require("../messages"));
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const TipItem = ({
  badges,
  incident
}) => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const category = (0, _hooks.useIncidentCategoryConfig)(incident.category);
  const date = (0, _location.getIncidentDate)(incident.createdAt);
  const renderInfo = () => {
    if (incident.isViolated) {
      const text = (0, _string.formatString)(formatMessage(_messages.default.violationInfo), {
        type: _incidentCodeCore.sharedStrings.violation_types[incident.violationType || _incidentCodeCore.ViolationType.WrongContent]
      });
      return /*#__PURE__*/_react.default.createElement(_styles.ViolationContainer, {
        colors: _assets.colors.mapOverlay
      }, /*#__PURE__*/_react.default.createElement(_styles.ViolationText, null, text));
    }
    const addressString = incident.address || formatMessage(_messages.default.noAddress);
    const mapUrl = incident.mapUrl ? {
      uri: incident.mapUrl
    } : null;
    const coords = incident.location ? (0, _location.convertLocationToCoords)(incident.location) : {
      latitude: 0,
      longitude: 0
    };
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MapOverlayContainer, {
      colors: _assets.colors.mapOverlay
    }, /*#__PURE__*/_react.default.createElement(_styles.MapOverlayTitle, {
      numberOfLines: 1,
      isClosed: incident.isResolved
    }, formatMessage(_messages.default.address)), /*#__PURE__*/_react.default.createElement(_styles.MapOverlayAddress, {
      numberOfLines: 2
    }, addressString)), mapUrl ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MapImage, {
      source: mapUrl,
      isClosed: incident.isResolved
    }), /*#__PURE__*/_react.default.createElement(_styles.Marker, {
      colors: incident.isResolved ? [_assets.colors.white, _assets.colors.white] : category.backgroundGradientColors
    })) : /*#__PURE__*/_react.default.createElement(_MapSnapshot.default, {
      coords: coords,
      gradientColor: category.backgroundGradientColors
    }));
  };
  const renderTitle = type => {
    switch (type) {
      case _incidentCodeCore.IncidentType.Escort:
        return formatMessage(_messages.default.escort);
      case _incidentCodeCore.IncidentType.PassiveEscort:
        return formatMessage(_messages.default.passiveEscort);
      default:
        return category.display;
    }
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, null, /*#__PURE__*/_react.default.createElement(_components.IncidentCategoryImage, {
    incidentType: incident.type,
    active: !incident.isResolved,
    category: incident.category,
    badges: badges,
    border: true
  }), /*#__PURE__*/_react.default.createElement(_styles.TextContainer, null, /*#__PURE__*/_react.default.createElement(_styles.TextTitle, {
    numberOfLines: 1
  }, renderTitle(incident.type)), /*#__PURE__*/_react.default.createElement(_styles.TextDescription, {
    numberOfLines: 1
  }, date))), /*#__PURE__*/_react.default.createElement(_styles.MapSnapshotContainer, null, renderInfo()));
};
var _default = exports.default = TipItem;
//# sourceMappingURL=index.js.map
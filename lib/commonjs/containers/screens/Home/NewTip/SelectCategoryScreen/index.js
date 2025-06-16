"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../../assets");
var _components = require("../../../../../components");
var _selectors = require("../../../../../containers/app/selectors");
var _screens = _interopRequireDefault(require("../../../../../containers/providers/RoutesProvider/screens"));
var _map = _interopRequireDefault(require("lodash/map"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _hooks = require("../../../../../utils/hooks");
var _navigation = _interopRequireDefault(require("../../../../../utils/navigation"));
var _actions = require("./actions");
var _messages = _interopRequireDefault(require("./messages"));
var _selectors2 = require("./selectors");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const IncidentCategoryScreen = () => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const categories = (0, _hooks.useSelector)((0, _selectors2.makeSelectIncidentCategories)());
  const selectedCategory = (0, _hooks.useSelector)((0, _selectors2.makeSelectSelectedCategory)());
  const organizationName = (0, _hooks.useSelector)((0, _selectors.makeSelectNewTipOrganizationName)());
  const selectCategoryAction = (0, _hooks.useAction)(_actions.selectIncidentCategory);
  const goToIncidentCommentScreen = () => _navigation.default.navigate(_screens.default.Home.NewTip.AddComment);
  const renderImage = category => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, category === selectedCategory ? /*#__PURE__*/_react.default.createElement(_styles.ImageSelected, null, /*#__PURE__*/_react.default.createElement(_styles.CategoryImage, {
    source: {
      uri: category.imageUrl
    }
  })) : /*#__PURE__*/_react.default.createElement(_styles.ImageBackground, {
    colors: category.backgroundGradientColors
  }, /*#__PURE__*/_react.default.createElement(_styles.CategoryImage, {
    source: {
      uri: category.imageUrl
    }
  })));
  const renderItem = category => /*#__PURE__*/_react.default.createElement(_styles.RowItemButton, {
    key: category.name,
    onPress: () => selectCategoryAction(category)
  }, /*#__PURE__*/_react.default.createElement(_styles.ImageContainer, {
    colors: category.backgroundGradientColors
  }, renderImage(category)), /*#__PURE__*/_react.default.createElement(_styles.TextContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CategoryText, {
    adjustsFontSizeToFit: true,
    numberOfLines: 2
  }, category.display)));
  const renderRow = (items, index) => /*#__PURE__*/_react.default.createElement(_styles.Row, {
    key: `Row${index}`
  }, items.length !== 3 && /*#__PURE__*/_react.default.createElement(_styles.RowItem, {
    key: "Item-Left"
  }), (0, _map.default)(items, renderItem), items.length !== 3 && /*#__PURE__*/_react.default.createElement(_styles.RowItem, {
    key: "Item-Right"
  }));
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_components.Header, {
    title: formatMessage(_messages.default.title)
  }), /*#__PURE__*/_react.default.createElement(_styles.InfoRow, null, /*#__PURE__*/_react.default.createElement(_styles.InfoText, null, formatMessage(_messages.default.info, {
    organizationName
  }))), /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.RowContainer, null, (0, _map.default)(categories, renderRow))), /*#__PURE__*/_react.default.createElement(_styles.ContinueScreenActionButton, {
    disabled: !selectedCategory,
    onCancel: _navigation.default.back,
    onPress: goToIncidentCommentScreen,
    text: formatMessage(_messages.default.continue),
    iconImage: _assets.images.icBack()
  })));
};
var _default = exports.default = IncidentCategoryScreen;
//# sourceMappingURL=index.js.map
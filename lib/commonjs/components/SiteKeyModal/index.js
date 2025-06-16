"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.List = void 0;
var _assets = require("../../assets");
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeModal = _interopRequireDefault(require("react-native-modal"));
var _styled = _interopRequireDefault(require("../../utils/styled"));
var _reactIntl = require("react-intl");
var _GradientButton = _interopRequireDefault(require("../GradientButton"));
var _IconButton = _interopRequireDefault(require("../IconButton"));
var _messages = _interopRequireDefault(require("./messages"));
var _reactNativeSelectDropdown = _interopRequireDefault(require("react-native-select-dropdown"));
var _MaterialCommunityIcons = _interopRequireDefault(require("react-native-vector-icons/MaterialCommunityIcons"));
var _hooks = require("../../utils/hooks");
var _actions = require("../../utils/location/actions");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * SiteKeyModal component.
 * Renders a modal for selecting and checking in/out of locations.
 *
 * @param isVisible - Flag indicating whether the modal is visible.
 * @param userData - User data.
 * @param onShow - Callback function when the modal is about to show.
 * @param onHide - Callback function when the modal is about to hide.
 * @param hideModal - Callback function to hide the modal.
 * @param isFromNotification - Flag indicating whether the modal is triggered from a notification.
 * @param notification_id - ID of the notification.
 */
const SiteKeyModal = ({
  isVisible,
  userData,
  onShow,
  onHide,
  hideModal,
  isFromNotification,
  notification_id
}) => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const setSiteKeyRequest = (0, _hooks.useAction)(_actions.setSiteKeyStatusRequest);
  const getGeofecens = (0, _hooks.useAction)(_actions.getAllGeofenceRequest);
  const isFetchingLocations = (0, _hooks.useSelector)(state => {
    return state.getAllGeofence.isLoading;
  });
  const getAllLocations = (0, _hooks.useSelector)(state => {
    return state.getAllGeofence.payload;
  });
  const [onSiteLocation, setOnSiteLocation] = (0, _react.useState)(getAllLocations != undefined ? getAllLocations.locations.filter(item => item.onSite == true) : []);
  let selectedLocaton = {
    location_id: isFromNotification ? notification_id : 0
  };
  const crossedLocation = isFromNotification ? getAllLocations != undefined ? getAllLocations.locations.filter(item => item.location_id == notification_id) : [] : [];
  const updateOnSiteStatus = (locations, selectedId, isOnSite) => {
    const selectedIdNum = Number(selectedId); // Convert string ID to number
    return locations.locations.map(loc => ({
      ...loc,
      onSite: loc.location_id === selectedIdNum ? isOnSite : false // Correct comparison
    }));
  };
  (0, _react.useEffect)(() => {
    if (getAllLocations != undefined) {
      setOnSiteLocation(getAllLocations.locations.filter(item => item.onSite == true));
    }
  }, [getAllLocations]);

  /**
  * Check in or out of a location.
  *
  * @param isOnSite - Flag indicating whether the user is on site or off site.
  */
  const checkIn = isOnSite => {
    if (selectedLocaton.location_id === 0) {
      // Handle error when no location is selected
    } else {
      const updatedLocations = updateOnSiteStatus(getAllLocations, selectedLocaton.location_id, isOnSite);
      setOnSiteLocation(updatedLocations.filter(item => item.onSite == true));
      hideModal();
      // console.log("selected location Id ==>",selectedLocaton.location_id)
      const payload = {
        userId: userData.id,
        locationId: selectedLocaton.location_id,
        body: {
          "onSite": isOnSite
        }
      };
      // console.log("payload ==>",)
      setSiteKeyRequest(payload);
    }
  };

  /**
   * Fetch locations.
   * Retrieves the list of available locations.
   */
  const fetchLocations = () => {
    getGeofecens(userData.id);
  };

  /**
   * Render the dropdown component for selecting a location.
   *
   * @returns The rendered dropdown component.
   */
  const renderDropdown = () => {
    if (getAllLocations == undefined) {
      if (isFetchingLocations) {
        return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
          style: styles.tapToFetchLocationStyle
        }, /*#__PURE__*/_react.default.createElement(_reactNative.ActivityIndicator, {
          size: 'small',
          color: 'grey'
        }));
      } else {
        return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(NoNetworkTxtStyle, null, formatMessage(_messages.default.noNetworkMessage)), /*#__PURE__*/_react.default.createElement(FetchLocationButton, {
          onPress: () => fetchLocations(),
          text: formatMessage(_messages.default.tapToFetchLocation)
        }));
      }
    } else {
      return /*#__PURE__*/_react.default.createElement(_reactNativeSelectDropdown.default, {
        data: getAllLocations != undefined ? getAllLocations.locations : [],
        onSelect: (selectedItem, index) => {
          selectedLocaton.location_id = selectedItem.location_id;
        },
        renderButton: (selectedItem, isOpened) => {
          return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
            style: styles.dropdownButtonStyle
          }, /*#__PURE__*/_react.default.createElement(DropDownButtonTxtStyle, null, selectedItem && selectedItem.name || formatMessage(_messages.default.selectLocation)), /*#__PURE__*/_react.default.createElement(_MaterialCommunityIcons.default, {
            name: isOpened ? 'chevron-up' : 'chevron-down',
            style: styles.dropdownButtonArrowStyle
          })));
        },
        renderItem: item => {
          return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
            style: {
              ...styles.dropdownItemStyle
            }
          }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
            style: styles.dropdownItemTxtStyle
          }, item.name));
        },
        showsVerticalScrollIndicator: false,
        dropdownStyle: styles.dropdownMenuStyle
      });
    }
  };

  /**
   * Render the description component.
   *
   * @returns The rendered description component.
   */
  const renderDescription = () => {
    if (getAllLocations != undefined) {
      return /*#__PURE__*/_react.default.createElement(Description, null, formatMessage(_messages.default.description));
    }
  };

  /**
   * Render the check-in button.
   *
   * @returns The rendered check-in button.
   */
  const renderCheckIn = () => {
    if (getAllLocations != undefined) {
      return /*#__PURE__*/_react.default.createElement(CheckInButton, {
        onPress: () => checkIn(true),
        text: formatMessage(_messages.default.checkInOnSite)
      });
    }
  };

  /**
   * Render the check-out button.
   *
   * @returns The rendered check-out button.
   */
  const renderCheckOut = () => {
    if (getAllLocations != undefined) {
      return /*#__PURE__*/_react.default.createElement(CheckOutButton, {
        onPress: () => checkIn(false),
        text: formatMessage(_messages.default.checkOutOffSite)
      });
    }
  };
  return /*#__PURE__*/_react.default.createElement(_reactNativeModal.default, {
    useNativeDriver: true,
    animationIn: "zoomIn",
    animationOut: "zoomOut",
    isVisible: isVisible,
    onBackButtonPress: hideModal,
    onBackdropPress: hideModal,
    onModalWillShow: onShow,
    onModalWillHide: onHide
  }, /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(Title, null, formatMessage(_messages.default.siteKey)), /*#__PURE__*/_react.default.createElement(CloseButton, {
    onPress: hideModal,
    source: _assets.images.icClose()
  }), !isFromNotification && /*#__PURE__*/_react.default.createElement(Status, null, formatMessage(_messages.default.status), ":", onSiteLocation.length != 0 ? " " + formatMessage(_messages.default.onSite) + " at " + onSiteLocation[0].name : "Offsite"), !isFromNotification && renderDropdown(), !isFromNotification && renderDescription(), isFromNotification && /*#__PURE__*/_react.default.createElement(LocationName, null, crossedLocation.length ? crossedLocation[0].name : ""), renderCheckIn(), renderCheckOut()));
};
const Container = _styled.default.View`
  border-radius: 5px;
  background-color: ${({
  theme
}) => theme.colors.white};
  padding: 20px 20px 0;
  position: relative;
`;
const CloseButton = (0, _styled.default)(_IconButton.default)`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: ${({
  theme
}) => theme.colors.white};
  position: absolute;
  top: 5px;
  right: 5px;
`;
const Title = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: 20px;
  line-height: 28px;
  color: ${({
  theme
}) => theme.colors.dark};
  text-align: center;
  top: -5px;

`;
const Status = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  font-size: 18px;
  line-height: 28px;
  color: ${({
  theme
}) => theme.colors.dark};
  text-align: left;
  top: 10px;
  margin-bottom: 10px;
`;
const LocationName = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  font-size: 18px;
  line-height: 28px;
  top: 10px;
  text-align: center;
  margin-bottom: 10px;
`;
const CheckInButton = (0, _styled.default)(_GradientButton.default).attrs(({
  theme
}) => ({
  textStyle: {
    fontSize: 18
  }
}))`
  margin-top: 30px;
  margin-bottom: 20px;
`;
const CheckOutButton = (0, _styled.default)(_GradientButton.default).attrs(() => ({
  textStyle: {
    fontSize: 18
  }
}))`
  margin-top: 10px;
  margin-bottom: 30px;
`;
const FetchLocationButton = (0, _styled.default)(_GradientButton.default).attrs(() => ({
  textStyle: {
    fontSize: 18
  }
}))`
  height: 50px;
  margin-top: 20px;
  margin-bottom: 30px;
`;
const List = exports.List = (0, _styled.default)(_reactNative.FlatList)`
  margin-bottom: 20px;
  top: 20px;
`;
const NoNetworkTxtStyle = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  top: 10px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
const DropDownButtonTxtStyle = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: 18px;
  line-height: 28px;
  text-align: left;
  color: ${({
  theme
}) => theme.colors.dark};
`;
const Description = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultLightFamily};
  font-size: 16px;
  text-align: left;
  color: ${({
  theme
}) => theme.colors.dark};
  margin-top: 5px;
`;
const styles = _reactNative.StyleSheet.create({
  dropdownButtonStyle: {
    height: 50,
    backgroundColor: '#E9ECEF',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginTop: 20
  },
  tapToFetchLocationStyle: {
    height: 50,
    backgroundColor: '#E9ECEF',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    marginTop: 20,
    marginBottom: 30
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26'
  },
  dropdownButtonArrowStyle: {
    fontSize: 24
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26'
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8
  },
  indicatorStyle: {
    color: '#151E26'
  }
});
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(SiteKeyModal);
//# sourceMappingURL=index.js.map
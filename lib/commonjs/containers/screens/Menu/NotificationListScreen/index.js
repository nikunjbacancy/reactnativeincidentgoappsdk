"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../assets");
var _api = require("../../../../api");
var _components = require("../../../../components");
var _react = _interopRequireWildcard(require("react"));
var _hooks = require("../../../../utils/hooks");
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _navigation = _interopRequireDefault(require("../../../../utils/navigation"));
var _screens = _interopRequireDefault(require("../../../../containers/providers/RoutesProvider/screens"));
var _selectors = require("../../../../containers/app/selectors");
var _messages = _interopRequireDefault(require("./messages"));
var _PanicActionModal = _interopRequireDefault(require("../../../../components/PanicActionModal"));
var _actions = require("../../../../utils/location/actions");
var _lodash = require("lodash");
var _common = require("../../../../utils/common");
var _backgroundGeolocation = require("../../../../utils/location/backgroundGeolocation");
var _styles = require("./styles");
var _actions2 = require("./actions");
var _incidentCodeCore = require("incident-code-core");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// import NavigatorService from 'utils/navigation';

// import { getTimeZone } from 'react-native-localize';

const restrictTime = {
  minuts: 30
};
const NotificationListScreen = () => {
  const userData = (0, _hooks.useSelector)((0, _selectors.makeSelectUser)());
  const [notificationList, setNotificationList] = (0, _react.useState)({
    records: []
  });
  const getNotificationAction = (0, _hooks.useAction)(_actions2.notificationListRequest);
  const resetNotificationAction = (0, _hooks.useAction)(_actions2.resetNotificationList);
  const updateReadUnreadStatus = (0, _hooks.useAction)(_actions2.notificationReadUnreadStatusRequest);
  const markReadAllNotification = (0, _hooks.useAction)(_actions2.readAllNotificationRequest);
  const isLoading = (0, _hooks.useSelector)(state => {
    return state.notificationListState.isLoading;
  });
  const result = (0, _hooks.useSelector)(state => {
    return state.notificationListState.listData;
  });
  const unreadNotyCounts = (0, _hooks.useSelector)(state => {
    return state.notificationListState.unreadCount;
  });
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const [refreshing, setRefreshing] = (0, _react.useState)(false);
  const [isNofityDetailModelShow, setNotifyDetailModelShow] = (0, _react.useState)(false);
  const [notify_title, setNotifyTitle] = (0, _react.useState)("");
  const [notify_msg, setNotifyMsg] = (0, _react.useState)("");
  const [showPanicActionPopup, setPanicActionPopup] = (0, _react.useState)(false);
  const [geoCredPNObject, setGeoCredPNObject] = (0, _react.useState)({});
  const geoCredStatusUpdate = (0, _hooks.useAction)(_actions.geoCredStatusRequest);
  (0, _react.useEffect)(() => {
    console.log("unreadNotyCounts===>", unreadNotyCounts);
    getNotificationAction(userData.id);
  }, []);
  (0, _react.useEffect)(() => {
    if (result != null) {
      // console.log("setNotificationList result=>",JSON.stringify(result.records.slice().reverse()))
      setNotificationList(result);
      // unreadCount(result.totalUnreadNotificationCount)
      setRefreshing(false);
    }
  }, [result]);
  const refreshList = () => {
    resetNotificationAction(null);
    getNotificationAction(userData.id);
  };
  (0, _react.useEffect)(() => {
    _api.event.on(_api.AppEvent.OnRefreshNotificationList, refreshList);
    return () => {
      _api.event.off(_api.AppEvent.OnRefreshNotificationList, refreshList); // sync
    };
  });
  const onRefresh = () => {
    setRefreshing(true);
    resetNotificationAction(null);
    getNotificationAction(userData.id);
  };
  const handleNotificationTap = item => {
    const data = item.pnMessage.data;
    if (data == undefined) {
      setNotifyTitle(item.pnMessage.android.data.title);
      setNotifyMsg(item.pnMessage.android.data.body);
      setNotifyDetailModelShow(true);
    } else {
      if (data.type === _incidentCodeCore.IncidentType.Normal && data.event === 'resolved') {
        _navigation.default.navigate(_screens.default.Menu.Tips.TipDetail, {
          incident: undefined,
          showChat: false,
          tipId: data === null || data === void 0 ? void 0 : data.tipId
        });
      } else if (data.type === _incidentCodeCore.IncidentType.Escort && data.event === 'resolved') {
        // incident closed
      } else if (data.type === _incidentCodeCore.IncidentType.PassiveEscort && data.event === 'resolved') {
        // incident closed
      } else if (data.type === _incidentCodeCore.IncidentType.Escort && data.event === 'PanicCreated' || data.event === 'PanicAccepted') {
        // incident created and accepted
        0;
      } else if (data.type === 'group' && data.event === 'groupChanged' || data.event === 'groupUpdated') {
        // group updated
        _navigation.default.back();
      } else if (data.type === 'SiteKey' && data.event === 'SiteKey') {
        // group updated
        _api.event.emit(_api.AppEvent.OnSiteKeyNotificataionReceived, data);
      } else if (data.type === 'Location' && data.event === 'LocationQuestion') {
        const gmtDateStr = (0, _common.getLocalTime)(data.sentAt);
        if ((0, _common.getTimeAgo)(gmtDateStr) <= restrictTime.minuts) {
          if (!item.isRead) {
            setTimeout(() => {
              setGeoCredPNObject(data);
              setPanicActionPopup(true);
            }, 100);
          } else {
            console.log("no action");
          }
        } else {}
      }
    }
    if (!item.isRead) {
      setTimeout(() => {
        let payload = {
          isRead: true,
          userID: userData.id,
          notiId: item.id,
          readFrom: "Notification"
        };
        updateReadUnreadStatus(payload);
      }, 400);
    }
  };

  // geocred feature ::: call on Click YES Button 
  const onYesTap = async () => {
    setPanicActionPopup(false);
    const location = await (0, _backgroundGeolocation.fetchLocation)();
    console.log("location--==>", JSON.stringify(location));
    if (location) {
      const locationId = geoCredPNObject != null ? +geoCredPNObject.locationId : 0;
      let payload = {
        userId: userData.id,
        locationId: locationId,
        incidentId: geoCredPNObject != null ? geoCredPNObject === null || geoCredPNObject === void 0 ? void 0 : geoCredPNObject.incidentId : "",
        response: "yes",
        lat: location.coords.latitude.toString(),
        lng: location.coords.longitude.toString()
      };
      geoCredStatusUpdate(payload);
      (0, _backgroundGeolocation.updateUserLoctionData)(location);
    }
  };

  // geocred feature ::: call on Click NO Button 
  const onNoTap = async () => {
    setPanicActionPopup(false);
    const location = await (0, _backgroundGeolocation.fetchLocation)();
    console.log("location--==>", JSON.stringify(location));
    if (location) {
      const locationId = geoCredPNObject != null ? +geoCredPNObject.locationId : 0;
      let payload = {
        userId: userData.id,
        locationId: locationId,
        incidentId: geoCredPNObject != null ? geoCredPNObject === null || geoCredPNObject === void 0 ? void 0 : geoCredPNObject.incidentId : "",
        response: "no",
        lat: location.coords.latitude.toString(),
        lng: location.coords.longitude.toString()
      };
      geoCredStatusUpdate(payload);
      (0, _backgroundGeolocation.updateUserLoctionData)(location);
    }
  };
  const NotificationItem = ({
    item
  }) => {
    const data = item.pnMessage.data;
    if (data == undefined) {
      const {
        formattedDate,
        daysAgo
      } = (0, _common.formatUTCtoLocalDate)(item.pnMessage.android.data.sentAt);
      return /*#__PURE__*/_react.default.createElement(_styles.NotificationItemContainer, {
        isRead: item.isRead,
        onPress: () => handleNotificationTap(item)
      }, /*#__PURE__*/_react.default.createElement(_styles.NotificationItemTitle, null, item.pnMessage.android.data.title), /*#__PURE__*/_react.default.createElement(_styles.NotificationItemBody, {
        numberOfLines: 3
      }, item.pnMessage.android.data.body), /*#__PURE__*/_react.default.createElement(_styles.NotificationItemTimeStamp, null, formattedDate + ", " + daysAgo));
    }
    const type = data.type.toLowerCase();
    const {
      formattedDate,
      daysAgo
    } = (0, _common.formatUTCtoLocalDate)(data.sentAt);
    // console.log("type===>",type)
    if (type === _incidentCodeCore.IncidentType.Normal && data.event === 'resolved') {
      return /*#__PURE__*/_react.default.createElement(_styles.NotificationItemContainer, {
        isRead: item.isRead,
        onPress: () => handleNotificationTap(item)
      }, /*#__PURE__*/_react.default.createElement(_styles.NotificationItemTitle, null, data.title), /*#__PURE__*/_react.default.createElement(_styles.NotificationItemBody, null, data.body), /*#__PURE__*/_react.default.createElement(_styles.NotificationItemTimeStamp, null, formattedDate + ", " + daysAgo));
    } else if (type === _incidentCodeCore.IncidentType.Escort && data.event === 'resolved') {
      // incident closed
      return /*#__PURE__*/_react.default.createElement(_styles.NotificationItemContainer, {
        isRead: item.isRead,
        onPress: () => handleNotificationTap(item)
      }, /*#__PURE__*/_react.default.createElement(_styles.NotificationItemTitle, null, data.title), /*#__PURE__*/_react.default.createElement(_styles.NotificationItemBody, null, data.body), /*#__PURE__*/_react.default.createElement(_styles.NotificationItemTimeStamp, null, formattedDate + ", " + daysAgo));
    } else if (type === _incidentCodeCore.IncidentType.PassiveEscort && data.event === 'resolved') {
      // incident closed
      return /*#__PURE__*/_react.default.createElement(_styles.NotificationItemContainer, {
        isRead: item.isRead,
        onPress: () => handleNotificationTap(item)
      }, /*#__PURE__*/_react.default.createElement(_styles.NotificationItemTitle, null, data.title), /*#__PURE__*/_react.default.createElement(_styles.NotificationItemBody, null, data.body), /*#__PURE__*/_react.default.createElement(_styles.NotificationItemTimeStamp, null, formattedDate + ", " + daysAgo));
    } else if (type === _incidentCodeCore.IncidentType.Escort && data.event === 'PanicCreated') {
      // incident created
      const itemData = JSON.parse(data.data);
      return /*#__PURE__*/_react.default.createElement(_styles.NotificationItemContainer, {
        isRead: item.isRead,
        onPress: () => handleNotificationTap(item)
      }, /*#__PURE__*/_react.default.createElement(_styles.NotificationItemTitle, null, itemData.title), /*#__PURE__*/_react.default.createElement(_styles.NotificationItemBody, null, itemData.message), /*#__PURE__*/_react.default.createElement(_styles.NotificationItemTimeStamp, null, formattedDate + ", " + daysAgo));
    } else if (type === _incidentCodeCore.IncidentType.Escort && data.event === 'PanicAccepted') {
      // incident accepted
      const itemData = JSON.parse(data.data);
      return /*#__PURE__*/_react.default.createElement(_styles.NotificationItemContainer, {
        isRead: item.isRead,
        onPress: () => handleNotificationTap(item)
      }, /*#__PURE__*/_react.default.createElement(_styles.NotificationItemTitle, null, itemData.title), /*#__PURE__*/_react.default.createElement(_styles.NotificationItemBody, null, itemData.message), /*#__PURE__*/_react.default.createElement(_styles.NotificationItemTimeStamp, null, formattedDate + ", " + daysAgo));
    } else if (type === 'group' && data.event === 'groupChanged' || data.event === 'groupUpdated') {
      // group updated 
      return /*#__PURE__*/_react.default.createElement(_styles.NotificationItemContainer, {
        isRead: item.isRead,
        onPress: () => handleNotificationTap(item)
      }, /*#__PURE__*/_react.default.createElement(_styles.NotificationItemTitle, null, data.title), /*#__PURE__*/_react.default.createElement(_styles.NotificationItemBody, null, data.body), /*#__PURE__*/_react.default.createElement(_styles.NotificationItemTimeStamp, null, formattedDate + ", " + daysAgo));
    } else if (type === 'location' && data.event === 'LocationQuestion') {
      const itemData = JSON.parse(data.data);
      return /*#__PURE__*/_react.default.createElement(_styles.NotificationItemContainer, {
        isRead: item.isRead,
        onPress: () => handleNotificationTap(item)
      }, /*#__PURE__*/_react.default.createElement(_styles.NotificationItemTitle, null, itemData.title), /*#__PURE__*/_react.default.createElement(_styles.NotificationItemBody, null, itemData.message), /*#__PURE__*/_react.default.createElement(_styles.NotificationItemTimeStamp, null, formattedDate + ", " + daysAgo));
    } else if (type === 'sitekey' && data.event === 'SiteKey') {
      const itemData = JSON.parse(data.data);
      return /*#__PURE__*/_react.default.createElement(_styles.NotificationItemContainer, {
        isRead: item.isRead,
        onPress: () => handleNotificationTap(item)
      }, /*#__PURE__*/_react.default.createElement(_styles.NotificationItemTitle, null, itemData.title), /*#__PURE__*/_react.default.createElement(_styles.NotificationItemBody, null, itemData.message), /*#__PURE__*/_react.default.createElement(_styles.NotificationItemTimeStamp, null, formattedDate + ", " + daysAgo));
    } else {
      return /*#__PURE__*/_react.default.createElement(_reactNative.View, null);
    }
  };

  // render notification item
  const renderNotificationItem = (item, index) => {
    return /*#__PURE__*/_react.default.createElement(NotificationItem, {
      item: item
    });
  };
  const onMarkReadAllTap = () => {
    console.log("read all");
    _reactNative.Alert.alert(formatMessage(_messages.default.markReadAll), formatMessage(_messages.default.msgMarkReadAll), [{
      text: formatMessage(_messages.default.no),
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    }, {
      text: formatMessage(_messages.default.yes),
      onPress: () => makeAPIForMarkAllReadAction()
    }]);
  };
  const makeAPIForMarkAllReadAction = () => {
    markReadAllNotification(userData.id);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_components.HeaderWithButton, {
    title: formatMessage(_messages.default.title),
    onButtonClick: () => onMarkReadAllTap(),
    uneadNotification: unreadNotyCounts
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, isLoading ? /*#__PURE__*/_react.default.createElement(_components.LoadingIndicator, null) : notificationList.records.length === 0 && /*#__PURE__*/_react.default.createElement(_styles.NoRecordsFound, null, formatMessage(_messages.default.noRecords)), !isLoading && /*#__PURE__*/_react.default.createElement(_styles.ListContainer, null, /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, {
    data: notificationList.records.length !== 0 ? notificationList.records.slice().reverse() : [],
    renderItem: ({
      item,
      index
    }) => renderNotificationItem(item, index),
    keyExtractor: item => item === null || item === void 0 ? void 0 : item.id,
    refreshControl: /*#__PURE__*/_react.default.createElement(_reactNative.RefreshControl, {
      refreshing: refreshing,
      onRefresh: onRefresh
    })
  })), /*#__PURE__*/_react.default.createElement(_components.ScreenActionModal, {
    isVisible: isNofityDetailModelShow,
    title: notify_title,
    message: notify_msg,
    actionText: "Ignore",
    onAction: () => setNotifyDetailModelShow(false),
    onHide: () => setNotifyDetailModelShow(false),
    showActionIcon: false,
    showSuccessIcon: false
  }), /*#__PURE__*/_react.default.createElement(_PanicActionModal.default, {
    isVisible: showPanicActionPopup,
    title: !(0, _lodash.isEmpty)(geoCredPNObject) ? JSON.parse(geoCredPNObject.data).title : "",
    message: !(0, _lodash.isEmpty)(geoCredPNObject) ? JSON.parse(geoCredPNObject.data).message : "",
    actionPositiveText: "Yes",
    actionNagetiveText: "No",
    onAction: () => onYesTap(),
    onHide: () => onNoTap(),
    showIcon: true,
    showActionIcon: true
  })), /*#__PURE__*/_react.default.createElement(_styles.BackButtonRow, null, /*#__PURE__*/_react.default.createElement(_components.ScreenActionButton, {
    onCancel: _navigation.default.back,
    tintColor: _assets.colors.white
  }))));
};
var _default = exports.default = NotificationListScreen;
//# sourceMappingURL=index.js.map
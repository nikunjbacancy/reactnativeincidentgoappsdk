// import NavigatorService from 'utils/navigation';
import { colors } from '../../../../assets';
import { AppEvent, event } from '../../../../api';
import { HeaderWithButton, SafeAreaContainer, ScreenActionButton } from '../../../../components';
import React, { useEffect, useState } from 'react';
import { useAction, useSelector } from '../../../../utils/hooks';
import { useIntl } from 'react-intl';
import { StatusBar, View, FlatList, RefreshControl, Alert } from 'react-native';
import { LoadingIndicator, ScreenActionModal } from '../../../../components';
import NavigatorService from '../../../../utils/navigation';
import Screens from '../../../../containers/providers/RoutesProvider/screens';
import { makeSelectUser } from '../../../../containers/app/selectors';
import messages from './messages';
import PanicActionModal from '../../../../components/PanicActionModal';
import { geoCredStatusRequest } from '../../../../utils/location/actions';
import { isEmpty } from 'lodash';
import { getTimeAgo, getLocalTime, formatUTCtoLocalDate } from '../../../../utils/common';
import { updateUserLoctionData, fetchLocation } from '../../../../utils/location/backgroundGeolocation';
import { BackButtonRow, Container, NoRecordsFound, NotificationItemContainer, NotificationItemBody, NotificationItemTitle, NotificationItemTimeStamp, ListContainer } from './styles';
import { notificationListRequest, resetNotificationList, notificationReadUnreadStatusRequest, readAllNotificationRequest } from './actions';
import { IncidentType } from 'incident-code-core';
// import { getTimeZone } from 'react-native-localize';

const restrictTime = {
  minuts: 30
};
const NotificationListScreen = () => {
  const userData = useSelector(makeSelectUser());
  const [notificationList, setNotificationList] = useState({
    records: []
  });
  const getNotificationAction = useAction(notificationListRequest);
  const resetNotificationAction = useAction(resetNotificationList);
  const updateReadUnreadStatus = useAction(notificationReadUnreadStatusRequest);
  const markReadAllNotification = useAction(readAllNotificationRequest);
  const isLoading = useSelector(state => {
    return state.notificationListState.isLoading;
  });
  const result = useSelector(state => {
    return state.notificationListState.listData;
  });
  const unreadNotyCounts = useSelector(state => {
    return state.notificationListState.unreadCount;
  });
  const {
    formatMessage
  } = useIntl();
  const [refreshing, setRefreshing] = useState(false);
  const [isNofityDetailModelShow, setNotifyDetailModelShow] = useState(false);
  const [notify_title, setNotifyTitle] = useState("");
  const [notify_msg, setNotifyMsg] = useState("");
  const [showPanicActionPopup, setPanicActionPopup] = useState(false);
  const [geoCredPNObject, setGeoCredPNObject] = useState({});
  const geoCredStatusUpdate = useAction(geoCredStatusRequest);
  useEffect(() => {
    console.log("unreadNotyCounts===>", unreadNotyCounts);
    getNotificationAction(userData.id);
  }, []);
  useEffect(() => {
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
  useEffect(() => {
    event.on(AppEvent.OnRefreshNotificationList, refreshList);
    return () => {
      event.off(AppEvent.OnRefreshNotificationList, refreshList); // sync
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
      if (data.type === IncidentType.Normal && data.event === 'resolved') {
        NavigatorService.navigate(Screens.Menu.Tips.TipDetail, {
          incident: undefined,
          showChat: false,
          tipId: data === null || data === void 0 ? void 0 : data.tipId
        });
      } else if (data.type === IncidentType.Escort && data.event === 'resolved') {
        // incident closed
      } else if (data.type === IncidentType.PassiveEscort && data.event === 'resolved') {
        // incident closed
      } else if (data.type === IncidentType.Escort && data.event === 'PanicCreated' || data.event === 'PanicAccepted') {
        // incident created and accepted
        0;
      } else if (data.type === 'group' && data.event === 'groupChanged' || data.event === 'groupUpdated') {
        // group updated
        NavigatorService.back();
      } else if (data.type === 'SiteKey' && data.event === 'SiteKey') {
        // group updated
        event.emit(AppEvent.OnSiteKeyNotificataionReceived, data);
      } else if (data.type === 'Location' && data.event === 'LocationQuestion') {
        const gmtDateStr = getLocalTime(data.sentAt);
        if (getTimeAgo(gmtDateStr) <= restrictTime.minuts) {
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
    const location = await fetchLocation();
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
      updateUserLoctionData(location);
    }
  };

  // geocred feature ::: call on Click NO Button 
  const onNoTap = async () => {
    setPanicActionPopup(false);
    const location = await fetchLocation();
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
      updateUserLoctionData(location);
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
      } = formatUTCtoLocalDate(item.pnMessage.android.data.sentAt);
      return /*#__PURE__*/React.createElement(NotificationItemContainer, {
        isRead: item.isRead,
        onPress: () => handleNotificationTap(item)
      }, /*#__PURE__*/React.createElement(NotificationItemTitle, null, item.pnMessage.android.data.title), /*#__PURE__*/React.createElement(NotificationItemBody, {
        numberOfLines: 3
      }, item.pnMessage.android.data.body), /*#__PURE__*/React.createElement(NotificationItemTimeStamp, null, formattedDate + ", " + daysAgo));
    }
    const type = data.type.toLowerCase();
    const {
      formattedDate,
      daysAgo
    } = formatUTCtoLocalDate(data.sentAt);
    // console.log("type===>",type)
    if (type === IncidentType.Normal && data.event === 'resolved') {
      return /*#__PURE__*/React.createElement(NotificationItemContainer, {
        isRead: item.isRead,
        onPress: () => handleNotificationTap(item)
      }, /*#__PURE__*/React.createElement(NotificationItemTitle, null, data.title), /*#__PURE__*/React.createElement(NotificationItemBody, null, data.body), /*#__PURE__*/React.createElement(NotificationItemTimeStamp, null, formattedDate + ", " + daysAgo));
    } else if (type === IncidentType.Escort && data.event === 'resolved') {
      // incident closed
      return /*#__PURE__*/React.createElement(NotificationItemContainer, {
        isRead: item.isRead,
        onPress: () => handleNotificationTap(item)
      }, /*#__PURE__*/React.createElement(NotificationItemTitle, null, data.title), /*#__PURE__*/React.createElement(NotificationItemBody, null, data.body), /*#__PURE__*/React.createElement(NotificationItemTimeStamp, null, formattedDate + ", " + daysAgo));
    } else if (type === IncidentType.PassiveEscort && data.event === 'resolved') {
      // incident closed
      return /*#__PURE__*/React.createElement(NotificationItemContainer, {
        isRead: item.isRead,
        onPress: () => handleNotificationTap(item)
      }, /*#__PURE__*/React.createElement(NotificationItemTitle, null, data.title), /*#__PURE__*/React.createElement(NotificationItemBody, null, data.body), /*#__PURE__*/React.createElement(NotificationItemTimeStamp, null, formattedDate + ", " + daysAgo));
    } else if (type === IncidentType.Escort && data.event === 'PanicCreated') {
      // incident created
      const itemData = JSON.parse(data.data);
      return /*#__PURE__*/React.createElement(NotificationItemContainer, {
        isRead: item.isRead,
        onPress: () => handleNotificationTap(item)
      }, /*#__PURE__*/React.createElement(NotificationItemTitle, null, itemData.title), /*#__PURE__*/React.createElement(NotificationItemBody, null, itemData.message), /*#__PURE__*/React.createElement(NotificationItemTimeStamp, null, formattedDate + ", " + daysAgo));
    } else if (type === IncidentType.Escort && data.event === 'PanicAccepted') {
      // incident accepted
      const itemData = JSON.parse(data.data);
      return /*#__PURE__*/React.createElement(NotificationItemContainer, {
        isRead: item.isRead,
        onPress: () => handleNotificationTap(item)
      }, /*#__PURE__*/React.createElement(NotificationItemTitle, null, itemData.title), /*#__PURE__*/React.createElement(NotificationItemBody, null, itemData.message), /*#__PURE__*/React.createElement(NotificationItemTimeStamp, null, formattedDate + ", " + daysAgo));
    } else if (type === 'group' && data.event === 'groupChanged' || data.event === 'groupUpdated') {
      // group updated 
      return /*#__PURE__*/React.createElement(NotificationItemContainer, {
        isRead: item.isRead,
        onPress: () => handleNotificationTap(item)
      }, /*#__PURE__*/React.createElement(NotificationItemTitle, null, data.title), /*#__PURE__*/React.createElement(NotificationItemBody, null, data.body), /*#__PURE__*/React.createElement(NotificationItemTimeStamp, null, formattedDate + ", " + daysAgo));
    } else if (type === 'location' && data.event === 'LocationQuestion') {
      const itemData = JSON.parse(data.data);
      return /*#__PURE__*/React.createElement(NotificationItemContainer, {
        isRead: item.isRead,
        onPress: () => handleNotificationTap(item)
      }, /*#__PURE__*/React.createElement(NotificationItemTitle, null, itemData.title), /*#__PURE__*/React.createElement(NotificationItemBody, null, itemData.message), /*#__PURE__*/React.createElement(NotificationItemTimeStamp, null, formattedDate + ", " + daysAgo));
    } else if (type === 'sitekey' && data.event === 'SiteKey') {
      const itemData = JSON.parse(data.data);
      return /*#__PURE__*/React.createElement(NotificationItemContainer, {
        isRead: item.isRead,
        onPress: () => handleNotificationTap(item)
      }, /*#__PURE__*/React.createElement(NotificationItemTitle, null, itemData.title), /*#__PURE__*/React.createElement(NotificationItemBody, null, itemData.message), /*#__PURE__*/React.createElement(NotificationItemTimeStamp, null, formattedDate + ", " + daysAgo));
    } else {
      return /*#__PURE__*/React.createElement(View, null);
    }
  };

  // render notification item
  const renderNotificationItem = (item, index) => {
    return /*#__PURE__*/React.createElement(NotificationItem, {
      item: item
    });
  };
  const onMarkReadAllTap = () => {
    console.log("read all");
    Alert.alert(formatMessage(messages.markReadAll), formatMessage(messages.msgMarkReadAll), [{
      text: formatMessage(messages.no),
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    }, {
      text: formatMessage(messages.yes),
      onPress: () => makeAPIForMarkAllReadAction()
    }]);
  };
  const makeAPIForMarkAllReadAction = () => {
    markReadAllNotification(userData.id);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/React.createElement(SafeAreaContainer, null, /*#__PURE__*/React.createElement(HeaderWithButton, {
    title: formatMessage(messages.title),
    onButtonClick: () => onMarkReadAllTap(),
    uneadNotification: unreadNotyCounts
  }), /*#__PURE__*/React.createElement(Container, null, isLoading ? /*#__PURE__*/React.createElement(LoadingIndicator, null) : notificationList.records.length === 0 && /*#__PURE__*/React.createElement(NoRecordsFound, null, formatMessage(messages.noRecords)), !isLoading && /*#__PURE__*/React.createElement(ListContainer, null, /*#__PURE__*/React.createElement(FlatList, {
    data: notificationList.records.length !== 0 ? notificationList.records.slice().reverse() : [],
    renderItem: ({
      item,
      index
    }) => renderNotificationItem(item, index),
    keyExtractor: item => item === null || item === void 0 ? void 0 : item.id,
    refreshControl: /*#__PURE__*/React.createElement(RefreshControl, {
      refreshing: refreshing,
      onRefresh: onRefresh
    })
  })), /*#__PURE__*/React.createElement(ScreenActionModal, {
    isVisible: isNofityDetailModelShow,
    title: notify_title,
    message: notify_msg,
    actionText: "Ignore",
    onAction: () => setNotifyDetailModelShow(false),
    onHide: () => setNotifyDetailModelShow(false),
    showActionIcon: false,
    showSuccessIcon: false
  }), /*#__PURE__*/React.createElement(PanicActionModal, {
    isVisible: showPanicActionPopup,
    title: !isEmpty(geoCredPNObject) ? JSON.parse(geoCredPNObject.data).title : "",
    message: !isEmpty(geoCredPNObject) ? JSON.parse(geoCredPNObject.data).message : "",
    actionPositiveText: "Yes",
    actionNagetiveText: "No",
    onAction: () => onYesTap(),
    onHide: () => onNoTap(),
    showIcon: true,
    showActionIcon: true
  })), /*#__PURE__*/React.createElement(BackButtonRow, null, /*#__PURE__*/React.createElement(ScreenActionButton, {
    onCancel: NavigatorService.back,
    tintColor: colors.white
  }))));
};
export default NotificationListScreen;
//# sourceMappingURL=index.js.map
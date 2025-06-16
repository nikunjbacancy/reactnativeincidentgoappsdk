import { AppEvent, event } from '../../../../../api';
import { colors } from '../../../../../assets';
import { LoadingIndicator, SafeAreaContainer, ScreenActionButton } from '../../../../../components';
import Screens from '../../../../../containers/providers/RoutesProvider/screens';
import filter from 'lodash/filter';
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { useAction, useSelector } from '../../../../../utils/hooks';
import NavigatorService from '../../../../../utils/navigation';
import { getBadges } from '../../../../../utils/notification';
import { getTipsRequest } from './actions';
import NoData from './NoData';
import { makeSelectIsLoading, makeSelectTips } from './selectors';
import { BackButtonRow, Container, List } from './styles';
import TipItem from './TipItem';
const MyTipsScreen = ({
  isFocused,
  navigation: {
    getParam
  }
}) => {
  const tipStatus = getParam('tipStatus');
  const [badges, setBadges] = useState([]);
  const getTipsRequestAction = useAction(getTipsRequest);
  const tips = useSelector(makeSelectTips());
  const isLoading = useSelector(makeSelectIsLoading());
  useEffect(() => {
    getTipsRequestAction({
      tipStatus,
      paging: false
    });
  }, [isFocused, tipStatus]);
  useEffect(() => {
    getBadges().then(notificationBadges => {
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
    event.on(AppEvent.OnNotificationBadge, notificationAdded);
    event.on(AppEvent.OnIncidentUpdated, onIncidentUpdated);
    return function componentDidUnMount() {
      event.off(AppEvent.OnNotificationBadge, notificationAdded);
      event.off(AppEvent.OnIncidentUpdated, onIncidentUpdated);
    };
  }, [setBadges]);
  const onEndReached = useCallback(() => {
    if (tips[tipStatus].hasMoreData) {
      getTipsRequestAction({
        tipStatus,
        paging: true
      });
    }
  }, [tips, tipStatus]);
  const goToTipDetail = incident => {
    NavigatorService.navigate(Screens.Menu.Tips.TipDetail, {
      incident
    });
  };
  const renderReportItem = ({
    item
  }) => {
    var _item$id;
    return /*#__PURE__*/React.createElement(TouchableOpacity, {
      onPress: () => goToTipDetail(item)
    }, /*#__PURE__*/React.createElement(TipItem, {
      badges: filter(badges, b => b === (item === null || item === void 0 ? void 0 : item.id)),
      key: item === null || item === void 0 || (_item$id = item.id) === null || _item$id === void 0 ? void 0 : _item$id.toString(),
      incident: item
    }));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/React.createElement(SafeAreaContainer, null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(List, {
    data: tips[tipStatus].data,
    keyExtractor: item => {
      var _item$id2;
      return ((_item$id2 = item.id) === null || _item$id2 === void 0 ? void 0 : _item$id2.toString()) || '';
    },
    renderItem: renderReportItem,
    ListEmptyComponent: isLoading ? /*#__PURE__*/React.createElement(LoadingIndicator, null) : /*#__PURE__*/React.createElement(NoData, null),
    onEndReached: onEndReached,
    onEndReachedThreshold: 2
  })), /*#__PURE__*/React.createElement(BackButtonRow, null, /*#__PURE__*/React.createElement(ScreenActionButton, {
    onCancel: () => NavigatorService.navigate(Screens.Home.Escort.EscortType),
    tintColor: colors.white
  }))));
};
export default withNavigationFocus(MyTipsScreen);
//# sourceMappingURL=index.js.map
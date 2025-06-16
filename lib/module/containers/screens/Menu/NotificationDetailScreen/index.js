// import NavigatorService from 'utils/navigation';
import { colors } from '../../../../assets';
import { Header, SafeAreaContainer, ScreenActionButton } from '../../../../components';
import React, { useEffect } from 'react';
import { StatusBar, Text } from 'react-native';
import NavigatorService from '../../../../utils/navigation';
import { BackButtonRow, Container } from './styles';
const NotificationDetailScreen = ({
  navigation: {
    getParam
  }
}) => {
  // 
  let details = getParam('detailItem');
  console.log("Notfication detail ===>", details);
  useEffect(() => {});
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/React.createElement(SafeAreaContainer, null, /*#__PURE__*/React.createElement(Header, {
    title: "Notification Detail"
  }), /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Text, {
    style: {
      marginHorizontal: 20,
      marginTop: 20
    }
  }, JSON.stringify(details))), /*#__PURE__*/React.createElement(BackButtonRow, null, /*#__PURE__*/React.createElement(ScreenActionButton, {
    onCancel: NavigatorService.back,
    tintColor: colors.white
  }))));
};
export default NotificationDetailScreen;
//# sourceMappingURL=index.js.map
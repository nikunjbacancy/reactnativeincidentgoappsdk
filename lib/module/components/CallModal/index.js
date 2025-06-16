import { images } from '../../assets';
import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import { FlatList } from 'react-native';
import Modal from 'react-native-modal';
import { makeCall } from '../../utils/device';
import styled from '../../utils/styled';
import GradientButton from '../GradientButton';
import IconButton from '../IconButton';
import messages from './messages';
const CallModal = ({
  isVisible,
  onShow,
  onHide,
  hideModal,
  organization,
  organizations
}) => {
  const {
    formatMessage
  } = useIntl();
  const renderItem = itemInfo => {
    var _itemInfo$item2;
    return /*#__PURE__*/React.createElement(OrganizationButton, {
      onPress: () => {
        var _itemInfo$item;
        return makeCall((_itemInfo$item = itemInfo.item) === null || _itemInfo$item === void 0 ? void 0 : _itemInfo$item.phone);
      },
      text: (_itemInfo$item2 = itemInfo.item) === null || _itemInfo$item2 === void 0 ? void 0 : _itemInfo$item2.name
    });
  };
  const call911 = async () => {
    await makeCall('911');
  };
  return /*#__PURE__*/React.createElement(Modal, {
    useNativeDriver: true,
    animationIn: "zoomIn",
    animationOut: "zoomOut",
    isVisible: isVisible,
    onBackButtonPress: hideModal,
    onBackdropPress: hideModal,
    onModalWillShow: onShow,
    onModalWillHide: onHide
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(CloseButton, {
    onPress: hideModal,
    source: images.icClose()
  }), /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement(Title, null, formatMessage(messages.wantCall)), /*#__PURE__*/React.createElement(SubTitle, null, formatMessage(messages.emergency)), /*#__PURE__*/React.createElement(EmergencyButton, {
    onPress: call911,
    text: formatMessage(messages.call911)
  })), /*#__PURE__*/React.createElement(ListContainer, null, /*#__PURE__*/React.createElement(SubTitle, null, formatMessage(messages.organization)), organizations ? /*#__PURE__*/React.createElement(List, {
    keyExtractor: org => {
      var _org$id;
      return ((_org$id = org.id) === null || _org$id === void 0 ? void 0 : _org$id.toString()) || '';
    },
    renderItem: renderItem,
    data: organizations
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, renderItem({
    item: organization
  })))));
};
const Container = styled.View`
  border-radius: 5px;
  height: 75%;
  background-color: ${({
  theme
}) => theme.colors.white};
  padding: 20px 20px 0;
  position: relative;
`;
const Content = styled.View`
  margin-bottom: 10px;
`;
const ListContainer = styled.View`
  height: 70%;
  margin-bottom: auto;
`;
const CloseButton = styled(IconButton)`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: ${({
  theme
}) => theme.colors.white};
  position: absolute;
  top: -60px;
  right: 20px;
`;
const Title = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: 20px;
  line-height: 28px;
  color: ${({
  theme
}) => theme.colors.dark};
  text-align: center;
`;
const SubTitle = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: 16px;
  line-height: 28px;
  margin-top: 10px;
  color: ${({
  theme
}) => theme.colors.dark};
  text-align: center;
`;
const EmergencyButton = styled(GradientButton)`
  margin-top: 10px;
`;
const OrganizationButton = styled(GradientButton)`
  margin-top: 10px;
`;
export const List = styled(FlatList)`
  margin-bottom: 20px;
`;
export default /*#__PURE__*/memo(CallModal);
//# sourceMappingURL=index.js.map
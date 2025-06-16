import { GradientButton } from '../../../../../../components';
import { ClearLocationData } from '../../../../../../containers/app/actions';
import React, { useCallback } from 'react';
import { useIntl } from 'react-intl';
import Modal from 'react-native-modal';
import { useAction } from '../../../../../../utils/hooks';
import { stopBackgroundGeolocation } from '../../../../../../utils/location/backgroundGeolocation';
import styled from '../../../../../../utils/styled';
import { cancelEscortRequest, hideCancelEscortModal } from '../actions';
import messages from '../messages';
const CancelEscortModal = ({
  isVisible
}) => {
  const {
    formatMessage
  } = useIntl();
  const hideModalAction = useAction(hideCancelEscortModal);
  const cancelEscortAction = useAction(cancelEscortRequest);
  const clearLocation = useAction(ClearLocationData);
  const cancelEscort = useCallback(() => {
    cancelEscortAction();
    stopBackgroundGeolocation(clearLocation);
  }, [cancelEscortAction]);
  return /*#__PURE__*/React.createElement(Modal, {
    useNativeDriver: true,
    animationIn: "zoomIn",
    animationOut: "zoomOut",
    isVisible: isVisible,
    onBackButtonPress: hideModalAction,
    onBackdropPress: hideModalAction
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Title, null, formatMessage(messages.cancelEscortModalTitle)), /*#__PURE__*/React.createElement(ButtonContainer, null, /*#__PURE__*/React.createElement(CancelEscortButton, {
    onPress: cancelEscort
  }, /*#__PURE__*/React.createElement(CancelText, null, formatMessage(messages.cancelEscort))), /*#__PURE__*/React.createElement(ContinueEscortButton, {
    onPress: hideModalAction,
    text: formatMessage(messages.continueEscort)
  }))));
};
const Container = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  height: 280px;
  background-color: ${({
  theme
}) => theme.colors.white};
`;
const Title = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: 18px;
  line-height: 24px;
  color: ${({
  theme
}) => theme.colors.dark};
  margin: 30px 30px 5px;
  text-align: center;
`;
const ButtonContainer = styled.View`
  display: flex;
  margin-top: auto;
`;
const CancelEscortButton = styled.TouchableOpacity`
  height: 60px;
  background-color: ${({
  theme
}) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-top-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
const CancelText = styled.Text`
  color: ${({
  theme
}) => theme.colors.dark};
  text-transform: uppercase;
  font-size: 18px;
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
`;
const ContinueEscortButton = styled(GradientButton).attrs(({
  theme
}) => ({
  textStyle: {
    color: theme.colors.highlight,
    textTransform: 'uppercase',
    fontSize: 18
  }
}))`
  height: 60px;
  background-color: ${({
  theme
}) => theme.colors.white};
  border-top-width: 1px;
  border-top-color: ${({
  theme
}) => theme.colors.nearWhite};
  border-radius: 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
export default CancelEscortModal;
//# sourceMappingURL=index.js.map
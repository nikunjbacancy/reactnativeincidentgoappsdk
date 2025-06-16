/* eslint-disable no-unused-expressions */
import { GradientButton } from '../../../../../../components';
import React, { useCallback } from 'react';
import { useIntl } from 'react-intl';
import Modal from 'react-native-modal';
import { useAction, useSelector } from '../../../../../../utils/hooks';
import styled from '../../../../../../utils/styled';
import { deleteIncidentRequest, hideCancelIncidentModal } from '../actions';
import messages from '../messages';
import { makeSelectDeletingIncident } from '../selectors';
const CancelTipModal = ({
  isVisible,
  onShow,
  onHide,
  onPressYes
}) => {
  const {
    formatMessage
  } = useIntl();
  const hideModalAction = useAction(hideCancelIncidentModal);
  const deleteIncidentAction = useAction(deleteIncidentRequest);
  const deletingIncident = useSelector(makeSelectDeletingIncident());
  const handleDeleteIncidentAction = useCallback(() => {
    onPressYes === null || onPressYes === void 0 || onPressYes();
    deleteIncidentAction();
  }, [onPressYes, deleteIncidentAction]);
  return /*#__PURE__*/React.createElement(Modal, {
    useNativeDriver: true,
    animationIn: "zoomIn",
    animationOut: "zoomOut",
    isVisible: isVisible,
    onBackButtonPress: hideModalAction,
    onBackdropPress: hideModalAction,
    onModalWillShow: onShow,
    onModalWillHide: onHide
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Title, null, formatMessage(messages.cancelIncidentTitle)), /*#__PURE__*/React.createElement(Message, null, formatMessage(messages.cancelIncidentMessage)), /*#__PURE__*/React.createElement(ButtonContainer, null, /*#__PURE__*/React.createElement(YesButton, {
    loading: deletingIncident,
    onPress: handleDeleteIncidentAction,
    text: formatMessage(messages.yes)
  }), /*#__PURE__*/React.createElement(CancelButton, {
    onPress: hideModalAction
  }, /*#__PURE__*/React.createElement(CancelText, null, formatMessage(messages.no))))));
};
const Container = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  height: 250px;
  background-color: ${({
  theme
}) => theme.colors.white};
  overflow: hidden;
`;
const Title = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  font-size: 20px;
  line-height: 28px;
  color: ${({
  theme
}) => theme.colors.dark};
  margin: 20px 30px 0;
  text-align: center;
`;
const Message = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: 16px;
  line-height: 24px;
  margin: auto 30px 0;
  color: ${({
  theme
}) => theme.colors.dark};
  text-align: center;
`;
const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  border-top-width: 1px;
  border-top-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
const CancelButton = styled.TouchableOpacity`
  flex: 0.5;
  background-color: ${({
  theme
}) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-left-width: 1px;
  border-left-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
const CancelText = styled.Text`
  color: ${({
  theme
}) => theme.colors.highlight};
  text-transform: uppercase;
  font-size: 18px;
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
`;
const YesButton = styled(GradientButton).attrs(({
  theme
}) => ({
  textStyle: {
    color: theme.colors.dark,
    textTransform: 'uppercase',
    fontSize: 18
  }
}))`
  flex: 0.5;
  height: 60px;
  background-color: ${({
  theme
}) => theme.colors.white};
`;
export default CancelTipModal;
//# sourceMappingURL=index.js.map
import { images } from '../../../../../../assets';
import { GradientButton, IncidentCategoryImage, LoadingIndicator } from '../../../../../../components';
import IconButton from '../../../../../../components/IconButton';
import { InfoContainer, TextContainer, TextDescription, TextTitle } from '../../../../../../containers/screens/Menu/Tips/MyTipsScreen/TipItem/styles';
import React from 'react';
import { useIntl } from 'react-intl';
import { getIncidentDate } from '../../../../../../utils/location';
import styled from '../../../../../../utils/styled';
import messages from '../messages';
const FastAccessModal = ({
  isVisible,
  hideModal,
  incident,
  organization,
  onOpen
}) => {
  const {
    formatMessage
  } = useIntl();
  const date = getIncidentDate(incident === null || incident === void 0 ? void 0 : incident.createdAt);
  return /*#__PURE__*/React.createElement(React.Fragment, null, isVisible && /*#__PURE__*/React.createElement(Container, null, incident && organization ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CloseButton, {
    source: images.icClose(),
    onPress: hideModal
  }), /*#__PURE__*/React.createElement(TitleContainer, null, /*#__PURE__*/React.createElement(TitleBold, null, formatMessage(messages.fastAccess)), /*#__PURE__*/React.createElement(Title, null, formatMessage(messages.fastAccessRest))), /*#__PURE__*/React.createElement(InfoContainer, null, /*#__PURE__*/React.createElement(IncidentCategoryImage, {
    incidentType: incident.type,
    active: !incident.isResolved,
    category: incident.category,
    border: true
  }), /*#__PURE__*/React.createElement(TextContainer, null, /*#__PURE__*/React.createElement(TextTitle, {
    numberOfLines: 1
  }, organization === null || organization === void 0 ? void 0 : organization.name), /*#__PURE__*/React.createElement(TextDescription, {
    numberOfLines: 1
  }, date)), /*#__PURE__*/React.createElement(OpenButton, {
    onPress: onOpen,
    text: formatMessage(messages.open)
  }))) : /*#__PURE__*/React.createElement(LoadingIndicator, null)));
};
const Container = styled.View`
  border-radius: 17px;
  height: 100px;
  background-color: ${({
  theme
}) => theme.colors.white};
  position: absolute;
  bottom: 26%;
  left: 0;
  right: 0;
  margin-left: 5%;
  margin-right: 5%;
  overflow: hidden;
`;
const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 13px;
  margin-left: 10px;
  margin-bottom: auto;
`;
const TitleBold = styled.Text`
  font-weight: bold;
`;
const Title = styled.Text``;
const CloseButton = styled(IconButton).attrs(({
  theme
}) => ({
  tintColor: theme.colors.lightGrey
}))`
  width: 44px;
  height: 44px;
  position: absolute;
  right: 0;
`;
const OpenButton = styled(GradientButton)`
  width: 64px;
  height: 42px;
  border-radius: 13px;
  margin-left: auto;
  margin-top: auto;
`;
export default FastAccessModal;
//# sourceMappingURL=index.js.map
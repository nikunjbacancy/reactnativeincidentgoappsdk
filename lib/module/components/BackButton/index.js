import { images } from '../../assets';
import React from 'react';
import NavigatorService from '../../utils/navigation';
import styled from '../../utils/styled';
import IconButton from '../IconButton';
const BackButton = ({
  style,
  back
}) => /*#__PURE__*/React.createElement(BackButtonContainer, null, /*#__PURE__*/React.createElement(BackButtonIcon, {
  style: style,
  source: images.icBack(),
  onPress: back || NavigatorService.back
}));
export default BackButton;
const BackButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  height: 50px;
  flex: 0.2;
`;
const BackButtonIcon = styled(IconButton)`
  background-color: ${({
  theme
}) => theme.colors.background2};
  height: 100%;
`;
//# sourceMappingURL=index.js.map
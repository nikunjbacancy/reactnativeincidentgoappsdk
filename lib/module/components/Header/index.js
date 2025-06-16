import { images } from '../../assets';
import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from '../../utils/styled';
const icon = {
  width: 22,
  height: 32
};
const Header = ({
  title
}) => {
  return /*#__PURE__*/React.createElement(SafeAreaView, null, /*#__PURE__*/React.createElement(HeaderRow, null, /*#__PURE__*/React.createElement(Logo, {
    source: images.logo()
  }), /*#__PURE__*/React.createElement(TitleText, null, title), /*#__PURE__*/React.createElement(EmptySpace, null)));
};
const HeaderRow = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  padding: 0 30px;
  
`;
const Logo = styled.Image`
  width: ${icon.width}px;
  height: ${icon.height}px;
  tint-color: ${({
  theme
}) => theme.colors.dark};
`;
const EmptySpace = styled.View`
  width: ${icon.width}px;
  height: ${icon.height}px;
`;
const TitleText = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  text-align: center;
  font-size: ${({
  theme
}) => theme.fonts.extraLargeSize};
  margin-left: 20px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
export default styled(Header)`
  margin-top: 20px;
`;
//# sourceMappingURL=index.js.map
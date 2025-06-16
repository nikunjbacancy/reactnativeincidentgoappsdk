import { images } from '../../assets';
import React from 'react';
import { SafeAreaView, TouchableHighlight } from 'react-native';
import styled from '../../utils/styled';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import colors from '../../assets/colors';
const icon = {
  width: 22,
  height: 32
};
const HeaderWithButton = ({
  title,
  onButtonClick,
  uneadNotification
}) => {
  return /*#__PURE__*/React.createElement(SafeAreaView, null, /*#__PURE__*/React.createElement(HeaderRow, null, /*#__PURE__*/React.createElement(Logo, {
    source: images.logo()
  }), /*#__PURE__*/React.createElement(TitleText, null, title), /*#__PURE__*/React.createElement(EmptySpace, null), uneadNotification > 0 && /*#__PURE__*/React.createElement(MenuContainer, null, /*#__PURE__*/React.createElement(MenuTrigger, null, /*#__PURE__*/React.createElement(HamburgerMenu, {
    source: images.more()
  })), /*#__PURE__*/React.createElement(MenuOptions, {
    customStyles: optionsStyles
  }, /*#__PURE__*/React.createElement(MenuOption, {
    onSelect: () => onButtonClick()
  }, /*#__PURE__*/React.createElement(MenuOptionInner, null, /*#__PURE__*/React.createElement(MenuOptionText, null, "Mark as Read All")))))));
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
  flex:1
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
export const MenuContainer = styled(Menu)`
  
  background-color: ${({
  theme
}) => theme.colors.transparent};
  border-left-color: ${({
  theme
}) => theme.colors.lightGrey};
`;
export const MenuOptionInner = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 15px 20px;
  border-bottom-width: 1px;
  border-color: ${({
  theme
}) => theme.colors.white};
`;
export const MenuOptionText = styled.Text`
  font-size: 16px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
export const MenuOptionIcon = styled.Image`
  margin-left: auto;
`;
export const HamburgerMenu = styled.Image`
  width: 22px;
  height: 22px;
`;
export default styled(HeaderWithButton)`
  margin-top: 20px;
`;
const optionsStyles = {
  optionsContainer: {
    backgroundColor: colors.nearWhite,
    width: 'auto',
    flexDirection: 'row-reverse',
    marginTop: 25
  },
  optionWrapper: {
    width: 200,
    padding: 0,
    margin: 0,
    marginRight: -30
  },
  optionTouchable: {
    activeOpacity: 70
  },
  OptionTouchableComponent: TouchableHighlight
};
//# sourceMappingURL=index.js.map
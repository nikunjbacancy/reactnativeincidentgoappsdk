import map from 'lodash/map';
import split from 'lodash/split';
import toUpper from 'lodash/toUpper';
import React, { memo } from 'react';
import { View } from 'react-native';
import styled from '../../../../../../utils/styled';
const ContactItem = ({
  person,
  person: {
    title,
    name,
    phone
  },
  onSelectContact
}) => {
  const handleSelectContact = () => {
    onSelectContact(person);
  };
  const renderUserIcon = () => {
    if (!name) return;
    const initials = map(split(name, ' '), str => str ? str.charAt(0) : '').join('');
    return /*#__PURE__*/React.createElement(FakeImageContainer, null, /*#__PURE__*/React.createElement(FakeImageText, null, toUpper(initials)));
  };
  return /*#__PURE__*/React.createElement(Container, {
    onPress: handleSelectContact
  }, /*#__PURE__*/React.createElement(React.Fragment, null, renderUserIcon(), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(NameContainer, null, /*#__PURE__*/React.createElement(FullName, null, name), title ? /*#__PURE__*/React.createElement(Role, null, `(${title})`) : null), /*#__PURE__*/React.createElement(PhoneNumberBox, null, /*#__PURE__*/React.createElement(PhoneNumber, null, phone)))));
};
const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 30px;
  border-bottom-width: 1px;
  border-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
const NameContainer = styled.View`
  padding-left: 15px;
  align-items: flex-start;
`;
const FullName = styled.Text`
  color: ${({
  theme
}) => theme.colors.dark};
  font-size: ${({
  theme
}) => theme.fonts.largeSize};
  line-height: 24px;
  letter-spacing: -0.27px;
`;
const Role = styled.Text`
  color: ${({
  theme
}) => theme.colors.primary};
  font-size: ${({
  theme
}) => theme.fonts.smallSize};
  line-height: 28px;
  letter-spacing: -0.4px;
`;
const FakeImageContainer = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({
  theme
}) => theme.colors.highlight};
  justify-content: center;
  align-items: center;
`;
const FakeImageText = styled.Text`
  color: ${({
  theme
}) => theme.colors.light};
  font-size: ${({
  theme
}) => theme.fonts.titleSize};
  font-weight: bold;
  text-align: center;
`;
const PhoneNumberBox = styled.View`
  padding-left: 15px;
`;
const PhoneNumber = styled.Text`
  color: ${({
  theme
}) => theme.colors.highlight};
`;
export default /*#__PURE__*/memo(ContactItem);
//# sourceMappingURL=index.js.map
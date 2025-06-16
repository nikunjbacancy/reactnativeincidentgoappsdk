import { colors, images } from '../../../../../assets';
import { IconButton } from '../../../../../components';
import isEmpty from 'lodash/isEmpty';
import React from 'react';
import { makeCall } from '../../../../../utils/device';
import styled from '../../../../../utils/styled';
const OrganizationItem = ({
  organization,
  onDelete
}) => {
  const {
    name,
    phone
  } = organization;
  const callOrganizationNumber = async () => {
    if (phone) {
      await makeCall(phone);
    }
  };
  const handleOnDelete = () => {
    onDelete(organization);
  };
  return /*#__PURE__*/React.createElement(Container, {
    onPress: callOrganizationNumber
  }, /*#__PURE__*/React.createElement(TextContainer, null, /*#__PURE__*/React.createElement(NameText, null, name), !isEmpty(phone) && /*#__PURE__*/React.createElement(PhoneNumberText, null, phone)), /*#__PURE__*/React.createElement(TrashIcon, {
    source: images.icTrash(),
    onPress: handleOnDelete
  }));
};
const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 0 30px;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-bottom-width: 1px;
  border-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
const TextContainer = styled.View`
  flex-grow: 1;
  margin-right: 50px;
  flex-direction: column;
  align-items: flex-start;
`;
const NameText = styled.Text`
  color: ${({
  theme
}) => theme.colors.dark};
  font-size: 17px;
`;
const PhoneNumberText = styled.Text`
  color: ${({
  theme
}) => theme.colors.highlight};
  font-size: 15px;
  margin-top: 5px;
`;
const TrashIcon = styled(IconButton).attrs({
  tintColor: colors.lightGrey
})`
  position: absolute;
  right: 10px;
`;
export default OrganizationItem;
//# sourceMappingURL=index.js.map
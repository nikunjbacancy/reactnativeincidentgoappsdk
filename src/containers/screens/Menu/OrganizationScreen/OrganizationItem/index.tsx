import { colors, images } from '../../../../../assets';
import { IconButton } from '../../../../../components';
import { Organization } from 'incident-code-core';
import isEmpty from 'lodash/isEmpty';
import React, { FC } from 'react';
import { makeCall } from '../../../../../utils/device';
import styled from '../../../../../utils/styled';

interface Props {
  organization: Organization;
  onDelete(organization: Organization): void;
}

const OrganizationItem: FC<Props> = ({ organization, onDelete }) => {
  const { name, phone } = organization;
  const callOrganizationNumber = async () => {
    if (phone) {
      await makeCall(phone);
    }
  };
  const handleOnDelete = () => {
    onDelete(organization);
  };
  return (
    <Container onPress={callOrganizationNumber}>
      <TextContainer>
        <NameText>{name}</NameText>
        {!isEmpty(phone) && <PhoneNumberText>{phone}</PhoneNumberText>}
      </TextContainer>
      <TrashIcon source={images.icTrash()} onPress={handleOnDelete} />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 0 30px;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.nearWhite};
`;

const TextContainer = styled.View`
  flex-grow: 1;
  margin-right: 50px;
  flex-direction: column;
  align-items: flex-start;
`;

const NameText = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 17px;
`;

const PhoneNumberText = styled.Text`
  color: ${({ theme }) => theme.colors.highlight};
  font-size: 15px;
  margin-top: 5px;
`;

const TrashIcon = styled(IconButton as any).attrs({
  tintColor: colors.lightGrey,
})`
  position: absolute;
  right: 10px;
`;

export default OrganizationItem;

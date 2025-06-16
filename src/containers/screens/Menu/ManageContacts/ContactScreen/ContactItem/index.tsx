import { colors, images } from '../../../../../../assets';
import { IconButton } from '../../../../../../components';
import { AppUserContact } from 'incident-code-core';
import React, { FC } from 'react';
import { isAndroid, makeCall } from '../../../../../../utils/device';
import { useAction } from '../../../../../../utils/hooks';
import styled from '../../../../../../utils/styled';

import {
  deleteContactRequest,
  toggleContactNotificationRequest,
} from '../actions';

interface Props {
  contact: AppUserContact;
}

const ContactItem: FC<Props> = ({
  contact,
  contact: { id, phone, name, notificationEnabled },
}) => {
  const toggleNotificationRequestAction = useAction(
    toggleContactNotificationRequest,
  );
  const deleteContactRequestAction = useAction(deleteContactRequest);

  const makeContactCall = () => makeCall(phone);
  const toggleNotification = (value: boolean) => {
    toggleNotificationRequestAction({
      ...contact,
      notificationEnabled: value,
    });
  };

  const onDeleteContact = () => {
    deleteContactRequestAction(id);
  };
  return (
    <Container>
      <TextContainer>
        {name ? (
          <NameContainer onPress={makeContactCall}>
            <ContactNameText>{name}</ContactNameText>
          </NameContainer>
        ) : (
          <PhoneContainer onPress={makeContactCall}>
            <PhoneNumberText>{phone}</PhoneNumberText>
          </PhoneContainer>
        )}
      </TextContainer>
      <SwitchButton
        value={notificationEnabled}
        onValueChange={toggleNotification}
        trackColor={{
          false: colors.lightGrey,
          true: colors.highlight,
        }}
        thumbColor={colors.nearWhite}
      />
      <TrashIcon source={images.icTrash()} onPress={onDeleteContact} />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 60px;
  padding: 0 30px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.nearWhite};
`;

const TextContainer = styled.View`
  flex-grow: 1;
`;

const NameContainer = styled.TouchableOpacity``;
const PhoneContainer = styled.TouchableOpacity``;

const ContactNameText = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fonts.largeSize};
`;

const PhoneNumberText = styled.Text`
  color: ${({ theme }) => theme.colors.highlight};
  font-size: 15px;
`;

const SwitchButton = styled.Switch`
  margin-left: auto;
  margin-right: 30px;
  ${isAndroid ? '' : 'transform: scale(0.7);'}
`;

const TrashIcon = styled(IconButton as any).attrs({
  tintColor: colors.lightGrey,
})`
  position: absolute;
  right: 10px;
`;

export default ContactItem;

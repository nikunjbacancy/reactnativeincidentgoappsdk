import {
  Header,
  LoadingIndicator,
  SafeAreaContainer,
  ScreenActionButton,
} from '../../../../../components';
import {
  makeSelectAppUserContacts,
  makeSelectConfigs,
} from '../../../../../containers/app/selectors';
import Screens from '../../../../../containers/providers/RoutesProvider/screens';
import { AppUserContact } from 'incident-code-core';
import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { ListRenderItemInfo, StatusBar } from 'react-native';
import Toast from 'react-native-root-toast';
import { useSelector } from '../../../../../utils/hooks';
import NavigatorService from '../../../../../utils/navigation';

import ContactItem from './ContactItem';
import messages from './messages';
import NoData from './NoData';
import {
  AddContactButtonRow,
  DescriptionText,
  InfoRow,
  InfoText,
  InfoWarning,
  List,
} from './styles';

const ContactScreen: FC = () => {
  const { formatMessage } = useIntl();

  const contacts = useSelector(makeSelectAppUserContacts());
  const configs = useSelector(makeSelectConfigs());

  const isLoading = false;
  const goToAddContact = () => {
    if (contacts.length < configs.contactLimit) {
      NavigatorService.navigate(Screens.Menu.ManageContact.AddContact);
    } else {
      Toast.show(formatMessage(messages.footerMax), {
        position: Toast.positions.CENTER,
      });
    }
  };

  const renderItem = ({
    item,
  }: ListRenderItemInfo<AppUserContact>): React.ReactElement => (
    <ContactItem contact={item} />
  );

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaContainer>
        <Header title={formatMessage(messages.title)} />
        <InfoRow>
          <InfoText>{formatMessage(messages.info)}</InfoText>
          <InfoWarning>{formatMessage(messages.warning)}</InfoWarning>
        </InfoRow>
        {!!contacts.length && (
          <DescriptionText>{formatMessage(messages.title)}</DescriptionText>
        )}
        <List
          keyExtractor={(contact: any) => contact.id?.toString() || ''}
          data={contacts}
          ListEmptyComponent={isLoading ? <LoadingIndicator /> : <NoData />}
          extraData={contacts}
          renderItem={renderItem}
        />
        <AddContactButtonRow>
          <ScreenActionButton
            onPress={goToAddContact}
            text={formatMessage(messages.addContactTitle)}
            onCancel={NavigatorService.back}
          />
        </AddContactButtonRow>
      </SafeAreaContainer>
    </>
  );
};

export default ContactScreen;

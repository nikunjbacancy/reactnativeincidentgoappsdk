import { images } from '../../../../../assets';
import {
  Header,
  LoadingIndicator,
  SafeAreaContainer,
  ScreenActionButton,
} from '../../../../../components';
import { UpdateLocationData } from '../../../../../containers/app/actions';
import Screens from '../../../../../containers/providers/RoutesProvider/screens';
import isEmpty from 'lodash/isEmpty';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Keyboard, ListRenderItemInfo, StatusBar, View, EmitterSubscription } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { OrganizationSelection } from 'types';
import { makeCall } from '../../../../../utils/device';
import { useAction, useSelector } from '../../../../../utils/hooks';
import NavigatorService from '../../../../../utils/navigation';

import { EscortType } from '../EscortTypeScreen/types';
import { startEscortRequest } from '../RequestScreen/actions';
import {
  getIntersectOrganizationsRequest,
  toggleSelectOrganization,
} from './actions';
import messages from './messages';
import {
  makeSelectEnableContinueButton,
  makeSelectError,
  makeSelectErrorMessage,
  makeSelectIntersectOrganizations,
  makeSelectRequestingOrganizations,
} from './selectors';
import {
  AddCommentInput,
  AddCommentRow,
  AddCommentText,
  Call911Button,
  Call911Container,
  Call911Info,
  Call911Title,
  Container,
  CreateEscortButtonRow,
  ErrorMessage,
  ErrorRow,
  InfoRow,
  InfoText,
  ItemCheckImage,
  ItemRow,
  ItemText,
  List,
} from './styles';

interface Props {
  isFocused: boolean;
}

const EscortScreen: FC<Props> = ({ isFocused }) => {
  const { formatMessage } = useIntl();

  const [comment, setComment] = useState('');
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  const organizations = useSelector(makeSelectIntersectOrganizations());
  const nextButtonEnabled = useSelector(makeSelectEnableContinueButton());
  const error = useSelector(makeSelectError());
  const errorMessage = useSelector(makeSelectErrorMessage());
  const requestingOrganizations = useSelector(
    makeSelectRequestingOrganizations(),
  );

  const toggleSelectOrganizationAction = useAction(toggleSelectOrganization);
  const getIntersectOrganizationsAction = useAction(
    getIntersectOrganizationsRequest,
  );
  const setLocation = useAction(UpdateLocationData);
  const startEscortAction = useAction(startEscortRequest);

  useEffect(() => {
    if (isFocused) {
      getIntersectOrganizationsAction(setLocation);
    }

    let subscriptions: EmitterSubscription[];
    subscriptions = [
      Keyboard.addListener(
        'keyboardDidShow',
        () => setIsKeyboardShow(true),
      ),
      Keyboard.addListener(
        'keyboardDidHide',
        () => setIsKeyboardShow(false),
      )
    ];

    return () => {
      subscriptions.forEach((s) => s?.remove?.());
    }

  }, [isFocused]);

  const call911 = useCallback(() => makeCall('911'), []);

  const handleStartEscort = useCallback(() => {
    startEscortAction(setLocation, comment);
    setComment('');
    NavigatorService.navigate(Screens.Home.Escort.EscortRequest, {
      isPanic: false,
      requestType: EscortType.Live,
    });
  }, [setLocation, comment]);

  if (requestingOrganizations) return <LoadingIndicator />;

  const renderHeader = () => (
    <>
      <Header title={formatMessage(messages.title)} />
      <InfoRow>
        <InfoText>{formatMessage(messages.info)}</InfoText>
      </InfoRow>
      {error && (
        <ErrorRow>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </ErrorRow>
      )}
    </>
  );

  const renderItem = (itemInfo: ListRenderItemInfo<OrganizationSelection>) => {
    const organization = itemInfo.item;

    return (
      <ItemRow onPress={() => toggleSelectOrganizationAction(organization.id)}>
        <>
          {organization.isSelected && (
            <ItemCheckImage source={images.icCheck()} />
          )}
          <ItemText>{itemInfo.item.name}</ItemText>
        </>
      </ItemRow>
    );
  };

  const renderOrganizations = () => {
    {console.log("render org==>",organizations)}
    if (isEmpty(organizations)) {
      return (
        <>
          <Header title={formatMessage(messages.title)} />
          <Call911Container>
            <Call911Title>{formatMessage(messages.call911Title)}</Call911Title>
            <Call911Info>{formatMessage(messages.call911Info)}</Call911Info>
            <Call911Button
              text={formatMessage(messages.call911)}
              onPress={call911}
            />
          </Call911Container>
        </>
      );
    }
    return (
      <>
        {renderHeader()}
        <List
          keyExtractor={(org: any) => org?.id?.toString() || ''}
          data={organizations || []}
          extraData={organizations}
          renderItem={renderItem}
        />
        <View style={{ marginTop: 'auto' }}>
          <AddCommentText>{formatMessage(messages.addComment)}</AddCommentText>
          <AddCommentRow>
            <AddCommentInput
              keyboardAppearance="light"
              placeholder={formatMessage(messages.commentPlaceholder)}
              value={comment}
              onChangeText={setComment}
              multiline
              numberOfLines={4}
            />
          </AddCommentRow>
        </View>
        <CreateEscortButtonRow>
          <ScreenActionButton
            disabled={!nextButtonEnabled}
            text={formatMessage(messages.requestEscort)}
            onPress={handleStartEscort}
          />
        </CreateEscortButtonRow>
      </>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaContainer>
        <Container isKeyboard={isKeyboardShow}>
          {renderOrganizations()}
        </Container>
      </SafeAreaContainer>
    </>
  );
};

export default withNavigationFocus(EscortScreen);

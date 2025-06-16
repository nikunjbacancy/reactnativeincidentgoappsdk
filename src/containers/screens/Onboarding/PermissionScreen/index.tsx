import { images } from '../../../../assets';
import { GradientButton, PaddingView, SafeAreaContainer } from '../../../../components';
import React from 'react';
import { useIntl } from 'react-intl';
import { Image, ScrollView, StatusBar } from 'react-native';
import { useAction } from '../../../../utils/hooks';

import { allPermissionsRequest, goToNextScreen } from './actions';
import messages from './messages';
import {
  Background,
  ButtonRow,
  ItemIcon,
  ItemRow,
  ItemText,
  LogoRow,
  NotYetButton,
  TitleRow,
  TitleText,
} from './syles';

const PermissionScreen = () => {
  const { formatMessage } = useIntl();

  const allPermissionsAction = useAction(allPermissionsRequest);
  const goToNextScreenAction = useAction(goToNextScreen);

  const handleRequestAllPermissions = () => {
      allPermissionsAction(formatMessage(messages.openPermissionsConfig));
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Background />
      <SafeAreaContainer>
        <ScrollView>
          <LogoRow>
            <Image source={images.logoWithText()} />
          </LogoRow>
          <TitleRow>
            <TitleText>{formatMessage(messages.title)}</TitleText>
          </TitleRow>
          <>
            <ItemRow>
              <ItemIcon source={images.icLocation()} />
              <ItemText>{formatMessage(messages.location)}</ItemText>
            </ItemRow>
            <ItemRow>
              <ItemIcon source={images.icCamera()} />
              <ItemText>{formatMessage(messages.camera)}</ItemText>
            </ItemRow>
            <ItemRow>
              <ItemIcon source={images.icMicrophone()} />
              <ItemText>{formatMessage(messages.microphone)}</ItemText>
            </ItemRow>
            <PaddingView size={1} />
          </>
          <ButtonRow>
            <NotYetButton
              onPress={goToNextScreenAction}
              text={formatMessage(messages.notYet)}
            />
            <GradientButton
              onPress={() => handleRequestAllPermissions()}
              text={formatMessage(messages.allow)}
            />
          </ButtonRow>
        </ScrollView>
      </SafeAreaContainer>
    </>
  );
};

export default PermissionScreen;
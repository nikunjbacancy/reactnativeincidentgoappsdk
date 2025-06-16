import { images } from '../../../../assets';
import {
  GradientButton,
  IconButton,
  ImageUpload,
  SafeAreaContainer,
} from '../../../../components';
import Screens from '../../../../containers/providers/RoutesProvider/screens';
import { makeSelectSelectedIsUpdating } from '../../../../containers/screens/Menu/MyAccountScreen/selectors';
import React, { FC, useCallback } from 'react';
import { useIntl } from 'react-intl';
import { Image, ScrollView, StatusBar } from 'react-native';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { useAction, useSelector } from '../../../../utils/hooks';

import { updatePortraitRequest } from './actions';
import { makeSelectUser } from '../../../../containers/app/selectors';
import messages from './messages';
import { makeSelectUploadMessageType } from './selectors';
import {
  BackButtonCol,
  Background,
  ContinueButtonRow,
  InfoRow,
  InfoText,
  LogoRow,
  OptionalText,
  TitleRow,
  TitleText,
} from './styles';

interface Params { }
interface Props extends NavigationStackScreenProps<Params, ScreenProps> { }

const AddUserPortraitScreen: FC<Props> = ({
  navigation: { goBack, replace },
}) => {
  const { formatMessage } = useIntl();

  const savePortrait = useAction(updatePortraitRequest);
  const isUpdating = useSelector(makeSelectSelectedIsUpdating());
  const uploadMessageType = useSelector(makeSelectUploadMessageType());
  const { portraitUrl } = useSelector(makeSelectUser());
  const goBackToSignIn = useCallback(() => goBack(), []);

  const goToPermissions = () => replace(Screens.Onboarding.Permission);
  //("portraitUrl=>",portraitUrl)
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Background />
      <SafeAreaContainer>
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
        >
          <LogoRow>
            <BackButtonCol>
              <IconButton
                source={images.icBackDark()}
                onPress={goBackToSignIn}
              />
            </BackButtonCol>
            <Image source={images.logoWithText()} />
          </LogoRow>
          <TitleRow>
            <TitleText>{formatMessage(messages.title)}</TitleText>
          </TitleRow>
          <InfoRow>
            <InfoText>
              {formatMessage(messages.info, {
                optional: (
                  <OptionalText key="1">
                    {formatMessage(messages.optional)}
                  </OptionalText>
                ),
              })}
            </InfoText>
          </InfoRow>
          <ImageUpload
            portraitUrl={portraitUrl}
            onUpload={savePortrait}
            actionInfoType={uploadMessageType}
          />
          <ContinueButtonRow>
            <GradientButton
              disabled={isUpdating}
              text={formatMessage(messages.next)}
              onPress={goToPermissions}
            />
          </ContinueButtonRow>
        </ScrollView>
      </SafeAreaContainer>
    </>
  );
};

export default AddUserPortraitScreen;

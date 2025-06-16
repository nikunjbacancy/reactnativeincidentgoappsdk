import { images } from '../../../../assets';
import {
  Form,
  IconButton,
  PaddingView,
  SafeAreaContainer,
  SubmitButtonField,
} from '../../../../components';
import { makeSelectUser } from '../../../../containers/app/selectors';
import Screens from '../../../../containers/providers/RoutesProvider/screens';
import React, { FC, useCallback } from 'react';
import { useIntl } from 'react-intl';
import { Image, ScrollView, StatusBar } from 'react-native';
import Toast from 'react-native-root-toast';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { useSelector } from '../../../../utils/hooks';

import {
  UPDATE_NAME_FAILURE,
  UPDATE_NAME_REQUEST,
  UPDATE_NAME_SUCCESS,
} from './constants';
import messages from './messages';
import {
  BackButtonCol,
  Background,
  InputRow,
  LogoRow,
  NameErrorField,
  NameInputField,
  PrivacyRow,
  PrivacyText,
  SubmitButtonRow,
  TitleRow,
  TitleText,
} from './styles';
import UpdateNameSchema from './validator';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Params {}

interface Props extends NavigationStackScreenProps<Params, ScreenProps> {}

const UpdateNameScreen: FC<Props> = ({ navigation: { goBack, replace } }) => {
  
  const { formatMessage } = useIntl();
  const schema = UpdateNameSchema(formatMessage);
  const user = useSelector(makeSelectUser());
  const initialValues = {
    firstName: user.firstName || '',
    lastName: user.lastName || '',
  };

  const   goBackToSignIn = useCallback(() => goBack(), []);
  const goToAddUserPortraitScreen = () => {
    AsyncStorage.removeItem("isLogout")
    replace(Screens.Onboarding.AddUserPortrait);
  } 

  if (user)
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
            {user.phone && (
              <Form
                start={UPDATE_NAME_REQUEST}
                resolve={UPDATE_NAME_SUCCESS}
                reject={UPDATE_NAME_FAILURE}
                initialValues={initialValues}
                validationSchema={schema}
                onResolve={goToAddUserPortraitScreen}
                onReject={action =>
                  Toast.show(action.payload.message, {
                    position: Toast.positions.BOTTOM,
                  })
                }
              >
                <>
                  <InputRow>
                    <NameInputField
                      name="firstName"
                      textContentType="givenName"
                      placeholder={formatMessage(messages.firstNamePlaceholder)}
                    />
                  </InputRow>
                  <NameErrorField name="firstName" />
                  <InputRow>
                    <NameInputField
                      name="lastName"
                      textContentType="familyName"
                      placeholder={formatMessage(messages.lastNamePlaceholder)}
                    />
                  </InputRow>
                  <NameErrorField name="lastName" />
                  <PrivacyRow>
                    <PrivacyText>{formatMessage(messages.privacy)}</PrivacyText>
                  </PrivacyRow>
                  <PaddingView size={1} />
                </>
                <SubmitButtonRow>
                  <SubmitButtonField text={formatMessage(messages.next)} />
                </SubmitButtonRow>
              </Form>
            )}
          </ScrollView>
        </SafeAreaContainer>
      </>
    );
  else 
  return null;
};

export default UpdateNameScreen;

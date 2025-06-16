import { images } from '../../../../assets';
import {
  CheckBoxField,
  Form,
  PaddingView,
  SafeAreaContainer,
  SubmitButtonField,
} from '../../../../components';
import { LINKS } from '../../../../containers/app/constants';
import Screens from '../../../../containers/providers/RoutesProvider/screens';
import React, { FC, useCallback } from 'react';
import { useIntl } from 'react-intl';
import { Image, ScrollView, StatusBar } from 'react-native';
import Toast from 'react-native-root-toast';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { FluxAction } from 'types';

import {
  SEND_CODE_FAILURE,
  SEND_CODE_REQUEST,
  SEND_CODE_SUCCESS,
} from './constants';
import messages from './messages';
import {
  AgreeText,
  AgreeTosError,
  Background,
  CountryText,
  InputRow,
  PrivacyPolicyText,
  LinkText,
  LogoRow,
  PhoneError,
  PhoneInputCol,
  PhoneLabelCol,
  PhoneText,
  SubmitButtonRow,
  TitleRow,
  TitleText,
  TosRow,
} from './styles';
import SignInSchema from './validator';

interface Params {}
interface Props extends NavigationStackScreenProps<Params, ScreenProps> {}

const SignInScreen: FC<Props> = ({ navigation: { navigate } }) => {
  const { formatMessage } = useIntl();
  const schema = SignInSchema(formatMessage);
  const initialValues = {
    phone: '',
    agreeTos: false,
  };
  const goToSignInCodeScreen = useCallback(
    (action: FluxAction) =>
      navigate(Screens.Onboarding.SignInCode, { phone: action.payload }),
    [navigate],
  );
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
            <Image source={images.logoWithText()} />
          </LogoRow>
          <TitleRow>
            <TitleText>{formatMessage(messages.title)}</TitleText>
          </TitleRow>
          <Form
            start={SEND_CODE_REQUEST}
            resolve={SEND_CODE_SUCCESS}
            reject={SEND_CODE_FAILURE}
            initialValues={initialValues}
            validationSchema={schema}
            onResolve={goToSignInCodeScreen}
            onReject={action =>
              Toast.show(action.payload.message, {
                position: Toast.positions.TOP,
                duration: 10000,
                opacity: 1,
                hideOnPress: true,
              })
            }
          >
            <>
              <InputRow>
                <PhoneLabelCol>
                  <CountryText>
                    {formatMessage(messages.countryCode)}
                  </CountryText>
                </PhoneLabelCol>
                <PhoneInputCol>
                  <PhoneText
                    name="phone"
                    keyboardType="phone-pad"
                    keyboardAppearance="light"
                    placeholder={formatMessage(messages.phonePlaceholder)}
                  />
                </PhoneInputCol>
              </InputRow>
              <PhoneError />
              <TosRow>
                <CheckBoxField name="agreeTos" />
                <AgreeText>
                  {formatMessage(messages.agreeTos, {
                    tos: (
                      <LinkText key="1" link={LINKS.tos}>
                        {formatMessage(messages.tos)}
                      </LinkText>
                    ), privacyPolicy: (
                      <PrivacyPolicyText key="2" link={() => navigate(Screens.Onboarding.PrivacyPolicy)} >
                        {formatMessage(messages.privacyPolicy)}
                      </PrivacyPolicyText>
                    )
                  })}
                </AgreeText>
              </TosRow>
              <AgreeTosError />
              <PaddingView size={1} />
            </>
            <SubmitButtonRow>
              <SubmitButtonField text={formatMessage(messages.sendCode)} />
            </SubmitButtonRow>
          </Form>
        </ScrollView>
      </SafeAreaContainer>
    </>
  );
};

export default SignInScreen;

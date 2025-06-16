import { images } from '../../../../assets';
import {
  Form,
  IconButton,
  PaddingView,
  SafeAreaContainer,
  SubmitButtonField,
} from '../../../../components';
import React, { FC, useCallback } from 'react';
import { useIntl } from 'react-intl';
import { Image, ScrollView, StatusBar } from 'react-native';
import Toast from 'react-native-root-toast';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { useAction } from '../../../../utils/hooks';
import { resendCode } from './actions';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './constants';
import messages from './messages';
import {
  BackButtonCol,
  Background,
  CodeError,
  CodeTextField,
  InputRow,
  LogoRow,
  ResendText,
  SubmitButtonRow,
  TitleRow,
  TitleText,
} from './styles';
import SignInCodeSchema from './validator';

interface Params {
  phone: string;
}
interface Props extends NavigationStackScreenProps<Params, ScreenProps> { }

const SignInCodeScreen: FC<Props> = ({
  navigation: { getParam, goBack },
}) => {
  const { formatMessage } = useIntl();
  const schema = SignInCodeSchema(formatMessage);
  const initialValues = { code: '', phone: getParam('phone'), isSDK: true };
  const resendCodeValues = { phone: getParam('phone'), isSDK: true };
  const goBackToSignIn = useCallback(() => goBack(), []);

  // const goToUpdateNameScreen = useCallback(
  //   () => navigate(Screens.Onboarding.PromoCode),
  //   [navigate],
  // );

  const resendCodeAction = useAction(resendCode);
  // const loginRequestAction = useAction(LOGIN_REQUEST);
  const handleResendCode = useCallback(() => {
    resendCodeAction(resendCodeValues);
  }, []);

  // const handleValidateClick = useCallback(() => {
  //   initialValues.code = ''
  //   loginRequestAction(initialValues);
  // }, []);


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
            <TitleText>
              {formatMessage(messages.title, {
                resendCode: (
                  <ResendText key="1" onPress={handleResendCode}>
                    {formatMessage(messages.resendCode)}
                  </ResendText>
                ),
              })}
            </TitleText>
          </TitleRow>
          <Form
            start={LOGIN_REQUEST}
            resolve={LOGIN_SUCCESS}
            reject={LOGIN_FAILURE}
            initialValues={initialValues}
            validationSchema={schema}
            // onResolve={goToUpdateNameScreen}
            onReject={action =>
              Toast.show(action.payload.message, {
                position: Toast.positions.BOTTOM,
              })
            }
          >
            <>
              <InputRow>
                <CodeTextField
                  name="code"
                  keyboardType="number-pad"
                  keyboardAppearance="light"
                  placeholder={formatMessage(messages.codePlaceholder)}
                />
              </InputRow>
              <CodeError name="code" />
              <PaddingView size={1} />
              
            </>
            <SubmitButtonRow>
              <SubmitButtonField text={formatMessage(messages.next)} />
            </SubmitButtonRow>
          </Form>
        </ScrollView>
      </SafeAreaContainer>
    </>
  );
};

export default SignInCodeScreen;

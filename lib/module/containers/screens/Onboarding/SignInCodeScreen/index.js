import { images } from '../../../../assets';
import { Form, IconButton, PaddingView, SafeAreaContainer, SubmitButtonField } from '../../../../components';
import React, { useCallback } from 'react';
import { useIntl } from 'react-intl';
import { Image, ScrollView, StatusBar } from 'react-native';
import Toast from 'react-native-root-toast';
import { useAction } from '../../../../utils/hooks';
import { resendCode } from './actions';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './constants';
import messages from './messages';
import { BackButtonCol, Background, CodeError, CodeTextField, InputRow, LogoRow, ResendText, SubmitButtonRow, TitleRow, TitleText } from './styles';
import SignInCodeSchema from './validator';
const SignInCodeScreen = ({
  navigation: {
    getParam,
    goBack
  }
}) => {
  const {
    formatMessage
  } = useIntl();
  const schema = SignInCodeSchema(formatMessage);
  const initialValues = {
    code: '',
    phone: getParam('phone'),
    isSDK: true
  };
  const resendCodeValues = {
    phone: getParam('phone'),
    isSDK: true
  };
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

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/React.createElement(Background, null), /*#__PURE__*/React.createElement(SafeAreaContainer, null, /*#__PURE__*/React.createElement(ScrollView, {
    contentContainerStyle: {
      flex: 1
    },
    keyboardShouldPersistTaps: "always",
    keyboardDismissMode: "on-drag"
  }, /*#__PURE__*/React.createElement(LogoRow, null, /*#__PURE__*/React.createElement(BackButtonCol, null, /*#__PURE__*/React.createElement(IconButton, {
    source: images.icBackDark(),
    onPress: goBackToSignIn
  })), /*#__PURE__*/React.createElement(Image, {
    source: images.logoWithText()
  })), /*#__PURE__*/React.createElement(TitleRow, null, /*#__PURE__*/React.createElement(TitleText, null, formatMessage(messages.title, {
    resendCode: /*#__PURE__*/React.createElement(ResendText, {
      key: "1",
      onPress: handleResendCode
    }, formatMessage(messages.resendCode))
  }))), /*#__PURE__*/React.createElement(Form, {
    start: LOGIN_REQUEST,
    resolve: LOGIN_SUCCESS,
    reject: LOGIN_FAILURE,
    initialValues: initialValues,
    validationSchema: schema
    // onResolve={goToUpdateNameScreen}
    ,
    onReject: action => Toast.show(action.payload.message, {
      position: Toast.positions.BOTTOM
    })
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InputRow, null, /*#__PURE__*/React.createElement(CodeTextField, {
    name: "code",
    keyboardType: "number-pad",
    keyboardAppearance: "light",
    placeholder: formatMessage(messages.codePlaceholder)
  })), /*#__PURE__*/React.createElement(CodeError, {
    name: "code"
  }), /*#__PURE__*/React.createElement(PaddingView, {
    size: 1
  })), /*#__PURE__*/React.createElement(SubmitButtonRow, null, /*#__PURE__*/React.createElement(SubmitButtonField, {
    text: formatMessage(messages.next)
  }))))));
};
export default SignInCodeScreen;
//# sourceMappingURL=index.js.map
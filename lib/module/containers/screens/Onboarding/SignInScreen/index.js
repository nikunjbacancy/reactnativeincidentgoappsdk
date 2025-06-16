import { images } from '../../../../assets';
import { CheckBoxField, Form, PaddingView, SafeAreaContainer, SubmitButtonField } from '../../../../components';
import { LINKS } from '../../../../containers/app/constants';
import Screens from '../../../../containers/providers/RoutesProvider/screens';
import React, { useCallback } from 'react';
import { useIntl } from 'react-intl';
import { Image, ScrollView, StatusBar } from 'react-native';
import Toast from 'react-native-root-toast';
import { SEND_CODE_FAILURE, SEND_CODE_REQUEST, SEND_CODE_SUCCESS } from './constants';
import messages from './messages';
import { AgreeText, AgreeTosError, Background, CountryText, InputRow, PrivacyPolicyText, LinkText, LogoRow, PhoneError, PhoneInputCol, PhoneLabelCol, PhoneText, SubmitButtonRow, TitleRow, TitleText, TosRow } from './styles';
import SignInSchema from './validator';
const SignInScreen = ({
  navigation: {
    navigate
  }
}) => {
  const {
    formatMessage
  } = useIntl();
  const schema = SignInSchema(formatMessage);
  const initialValues = {
    phone: '',
    agreeTos: false
  };
  const goToSignInCodeScreen = useCallback(action => navigate(Screens.Onboarding.SignInCode, {
    phone: action.payload
  }), [navigate]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/React.createElement(Background, null), /*#__PURE__*/React.createElement(SafeAreaContainer, null, /*#__PURE__*/React.createElement(ScrollView, {
    contentContainerStyle: {
      flex: 1
    },
    keyboardShouldPersistTaps: "always",
    keyboardDismissMode: "on-drag"
  }, /*#__PURE__*/React.createElement(LogoRow, null, /*#__PURE__*/React.createElement(Image, {
    source: images.logoWithText()
  })), /*#__PURE__*/React.createElement(TitleRow, null, /*#__PURE__*/React.createElement(TitleText, null, formatMessage(messages.title))), /*#__PURE__*/React.createElement(Form, {
    start: SEND_CODE_REQUEST,
    resolve: SEND_CODE_SUCCESS,
    reject: SEND_CODE_FAILURE,
    initialValues: initialValues,
    validationSchema: schema,
    onResolve: goToSignInCodeScreen,
    onReject: action => Toast.show(action.payload.message, {
      position: Toast.positions.TOP,
      duration: 10000,
      opacity: 1,
      hideOnPress: true
    })
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InputRow, null, /*#__PURE__*/React.createElement(PhoneLabelCol, null, /*#__PURE__*/React.createElement(CountryText, null, formatMessage(messages.countryCode))), /*#__PURE__*/React.createElement(PhoneInputCol, null, /*#__PURE__*/React.createElement(PhoneText, {
    name: "phone",
    keyboardType: "phone-pad",
    keyboardAppearance: "light",
    placeholder: formatMessage(messages.phonePlaceholder)
  }))), /*#__PURE__*/React.createElement(PhoneError, null), /*#__PURE__*/React.createElement(TosRow, null, /*#__PURE__*/React.createElement(CheckBoxField, {
    name: "agreeTos"
  }), /*#__PURE__*/React.createElement(AgreeText, null, formatMessage(messages.agreeTos, {
    tos: /*#__PURE__*/React.createElement(LinkText, {
      key: "1",
      link: LINKS.tos
    }, formatMessage(messages.tos)),
    privacyPolicy: /*#__PURE__*/React.createElement(PrivacyPolicyText, {
      key: "2",
      link: () => navigate(Screens.Onboarding.PrivacyPolicy)
    }, formatMessage(messages.privacyPolicy))
  }))), /*#__PURE__*/React.createElement(AgreeTosError, null), /*#__PURE__*/React.createElement(PaddingView, {
    size: 1
  })), /*#__PURE__*/React.createElement(SubmitButtonRow, null, /*#__PURE__*/React.createElement(SubmitButtonField, {
    text: formatMessage(messages.sendCode)
  }))))));
};
export default SignInScreen;
//# sourceMappingURL=index.js.map
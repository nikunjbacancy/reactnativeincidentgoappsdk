import { images } from '../../../../assets';
import { Form, IconButton, PaddingView, SafeAreaContainer, SubmitButtonField } from '../../../../components';
import React, { useCallback, useState } from 'react';
import { useIntl } from 'react-intl';
import { Image, ScrollView, StatusBar } from 'react-native';
import Toast from 'react-native-root-toast';
import { useAction } from '../../../../utils/hooks';
import { registerUserRequest } from "./actions";
import messages from './messages';
import { BackButtonCol, Background, CodeTextField, InputRow, LogoRow, SubmitButtonRow, TitleRow, TitleText, ValidationRow, ValidationText } from './styles';
import { REGISTER_USER_REQUEST } from './constants';
const PromoCodeScreen = ({
  navigation: {
    getParam,
    goBack
  }
}) => {
  const {
    formatMessage
  } = useIntl();

  // const schema = PromoCodeSchema(formatMessage);

  let promoCodeData = getParam('promoCodeData');
  const initialValues = {
    partnerCode: '',
    token: promoCodeData.token
  };
  const goBackToSignIn = useCallback(() => goBack(), []);
  const registerUserAction = useAction(registerUserRequest);
  const [input, setInput] = useState('');
  const handleNext = useCallback(() => {
    if (input === "") {
      return;
    }
    let params = {
      partnerCode: input,
      token: promoCodeData.token
    };
    //("params-->", params)
    registerUserAction(params);
  }, [input, setInput]);
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
  })), /*#__PURE__*/React.createElement(TitleRow, null, /*#__PURE__*/React.createElement(TitleText, null, formatMessage(messages.title))), /*#__PURE__*/React.createElement(Form, {
    start: REGISTER_USER_REQUEST,
    resolve: "",
    reject: "",
    initialValues: initialValues
    // validationSchema={schema}
    // onResolve={goToUpdateNameScreen}
    ,
    onReject: action => Toast.show(action.payload.message, {
      position: Toast.positions.BOTTOM
    })
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InputRow, null, /*#__PURE__*/React.createElement(CodeTextField, {
    name: "code",
    keyboardAppearance: "light",
    placeholder: formatMessage(messages.codePlaceholder),
    value: input,
    onChangeText: setInput
  })), /*#__PURE__*/React.createElement(ValidationRow, null, /*#__PURE__*/React.createElement(ValidationText, null, formatMessage(messages.invalidCode))), /*#__PURE__*/React.createElement(PaddingView, {
    size: 1
  })), /*#__PURE__*/React.createElement(SubmitButtonRow, null, /*#__PURE__*/React.createElement(SubmitButtonField, {
    text: formatMessage(messages.next),
    onPress: handleNext
  }))))));
};
export default PromoCodeScreen;
//# sourceMappingURL=index.js.map
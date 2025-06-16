import { images } from '../../../../assets';
import { Form, IconButton, PaddingView, SafeAreaContainer, SubmitButtonField } from '../../../../components';
import { makeSelectUser } from '../../../../containers/app/selectors';
import Screens from '../../../../containers/providers/RoutesProvider/screens';
import React, { useCallback } from 'react';
import { useIntl } from 'react-intl';
import { Image, ScrollView, StatusBar } from 'react-native';
import Toast from 'react-native-root-toast';
import { useSelector } from '../../../../utils/hooks';
import { UPDATE_NAME_FAILURE, UPDATE_NAME_REQUEST, UPDATE_NAME_SUCCESS } from './constants';
import messages from './messages';
import { BackButtonCol, Background, InputRow, LogoRow, NameErrorField, NameInputField, PrivacyRow, PrivacyText, SubmitButtonRow, TitleRow, TitleText } from './styles';
import UpdateNameSchema from './validator';
import AsyncStorage from '@react-native-async-storage/async-storage';
const UpdateNameScreen = ({
  navigation: {
    goBack,
    replace
  }
}) => {
  const {
    formatMessage
  } = useIntl();
  const schema = UpdateNameSchema(formatMessage);
  const user = useSelector(makeSelectUser());
  const initialValues = {
    firstName: user.firstName || '',
    lastName: user.lastName || ''
  };
  const goBackToSignIn = useCallback(() => goBack(), []);
  const goToAddUserPortraitScreen = () => {
    AsyncStorage.removeItem("isLogout");
    replace(Screens.Onboarding.AddUserPortrait);
  };
  if (user) return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
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
  })), /*#__PURE__*/React.createElement(TitleRow, null, /*#__PURE__*/React.createElement(TitleText, null, formatMessage(messages.title))), user.phone && /*#__PURE__*/React.createElement(Form, {
    start: UPDATE_NAME_REQUEST,
    resolve: UPDATE_NAME_SUCCESS,
    reject: UPDATE_NAME_FAILURE,
    initialValues: initialValues,
    validationSchema: schema,
    onResolve: goToAddUserPortraitScreen,
    onReject: action => Toast.show(action.payload.message, {
      position: Toast.positions.BOTTOM
    })
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InputRow, null, /*#__PURE__*/React.createElement(NameInputField, {
    name: "firstName",
    textContentType: "givenName",
    placeholder: formatMessage(messages.firstNamePlaceholder)
  })), /*#__PURE__*/React.createElement(NameErrorField, {
    name: "firstName"
  }), /*#__PURE__*/React.createElement(InputRow, null, /*#__PURE__*/React.createElement(NameInputField, {
    name: "lastName",
    textContentType: "familyName",
    placeholder: formatMessage(messages.lastNamePlaceholder)
  })), /*#__PURE__*/React.createElement(NameErrorField, {
    name: "lastName"
  }), /*#__PURE__*/React.createElement(PrivacyRow, null, /*#__PURE__*/React.createElement(PrivacyText, null, formatMessage(messages.privacy))), /*#__PURE__*/React.createElement(PaddingView, {
    size: 1
  })), /*#__PURE__*/React.createElement(SubmitButtonRow, null, /*#__PURE__*/React.createElement(SubmitButtonField, {
    text: formatMessage(messages.next)
  }))))));else return null;
};
export default UpdateNameScreen;
//# sourceMappingURL=index.js.map
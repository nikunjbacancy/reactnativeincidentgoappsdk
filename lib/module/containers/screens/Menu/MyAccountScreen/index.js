import { colors } from '../../../../assets';
import { Form, Header, ImageUpload, SafeAreaContainer, ScreenActionButtonField } from '../../../../components';
import { makeSelectUser } from '../../../../containers/app/selectors';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Keyboard, ScrollView, StatusBar } from 'react-native';
import Toast from 'react-native-root-toast';
import { useAction, useSelector } from '../../../../utils/hooks';
import NavigatorService from '../../../../utils/navigation';
import { clearMessageType, deletePortraitRequest, updatePortraitRequest } from './actions';
import { UPDATE_MY_ACCOUNT_NAME_FAILURE, UPDATE_MY_ACCOUNT_NAME_REQUEST, UPDATE_MY_ACCOUNT_NAME_SUCCESS } from './constants';
import messages from './messages';
import { makeSelectSelectedIsUpdating, makeSelectUploadMessageType } from './selectors';
import { DescriptionText, FormContent, InfoRow, InfoText, InputRow, NameErrorField, NameInputField, UpdateButtonRow } from './styles';
import UpdateNameSchema from './validator';
const MyAccountScreen = () => {
  const {
    formatMessage
  } = useIntl();
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);
  const {
    firstName,
    lastName,
    portraitUrl
  } = useSelector(makeSelectUser());
  const isUpdating = useSelector(makeSelectSelectedIsUpdating());
  const uploadMessageType = useSelector(makeSelectUploadMessageType());
  const deletePortrait = useAction(deletePortraitRequest);
  const savePortrait = useAction(updatePortraitRequest);
  const clearMessage = useAction(clearMessageType);
  const schema = UpdateNameSchema(formatMessage);
  const initialValues = {
    firstName,
    lastName
  };
  const goBackWithMessage = () => {
    Toast.show(formatMessage(messages.accountUpdated), {
      position: Toast.positions.CENTER
    });
    NavigatorService.back();
  };
  useEffect(() => {
    if (uploadMessageType) {
      return () => {
        clearMessage();
      };
    }
    return;
  }, [uploadMessageType]);
  useEffect(() => {
    let subscriptions;
    subscriptions = [Keyboard.addListener('keyboardDidShow', () => setIsKeyboardShow(true)), Keyboard.addListener('keyboardDidHide', () => setIsKeyboardShow(false))];
    return () => {
      subscriptions.forEach(s => {
        var _s$remove;
        return s === null || s === void 0 || (_s$remove = s.remove) === null || _s$remove === void 0 ? void 0 : _s$remove.call(s);
      });
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/React.createElement(SafeAreaContainer, null, /*#__PURE__*/React.createElement(ScrollView, {
    contentContainerStyle: {
      flex: 1
    },
    keyboardShouldPersistTaps: "always",
    keyboardDismissMode: "on-drag"
  }, /*#__PURE__*/React.createElement(Header, {
    title: formatMessage(messages.title)
  }), /*#__PURE__*/React.createElement(InfoRow, null, /*#__PURE__*/React.createElement(InfoText, null, formatMessage(messages.info))), !isKeyboardShow && /*#__PURE__*/React.createElement(ImageUpload, {
    portraitUrl: portraitUrl,
    onUpload: savePortrait,
    onDelete: deletePortrait,
    actionInfoType: uploadMessageType
  }), /*#__PURE__*/React.createElement(Form, {
    start: UPDATE_MY_ACCOUNT_NAME_REQUEST,
    resolve: UPDATE_MY_ACCOUNT_NAME_SUCCESS,
    reject: UPDATE_MY_ACCOUNT_NAME_FAILURE,
    initialValues: initialValues,
    validationSchema: schema,
    onResolve: goBackWithMessage,
    onReject: action => Toast.show(action.payload.message, {
      position: Toast.positions.BOTTOM
    })
  }, /*#__PURE__*/React.createElement(FormContent, null, /*#__PURE__*/React.createElement(DescriptionText, null, formatMessage(messages.description)), /*#__PURE__*/React.createElement(InputRow, null, /*#__PURE__*/React.createElement(NameInputField, {
    name: "firstName",
    autoCompleteType: "off",
    textContentType: "none",
    placeholder: formatMessage(messages.firstNamePlaceholder)
  })), /*#__PURE__*/React.createElement(NameErrorField, {
    name: "firstName"
  }), /*#__PURE__*/React.createElement(InputRow, null, /*#__PURE__*/React.createElement(NameInputField, {
    name: "lastName",
    autoCompleteType: "off",
    textContentType: "none",
    placeholder: formatMessage(messages.lastNamePlaceholder)
  })), /*#__PURE__*/React.createElement(NameErrorField, {
    name: "lastName"
  })), /*#__PURE__*/React.createElement(UpdateButtonRow, null, /*#__PURE__*/React.createElement(ScreenActionButtonField, {
    disabled: isUpdating,
    loading: isUpdating,
    text: formatMessage(messages.update),
    onCancel: NavigatorService.back,
    tintColor: colors.white
  }))))));
};
export default MyAccountScreen;
//# sourceMappingURL=index.js.map
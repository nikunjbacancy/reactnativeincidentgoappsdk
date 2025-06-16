import { images } from '../../../../../assets';
import { Header, LoadingIndicator, SafeAreaContainer, ScreenActionButton } from '../../../../../components';
import { UpdateLocationData } from '../../../../../containers/app/actions';
import Screens from '../../../../../containers/providers/RoutesProvider/screens';
import isEmpty from 'lodash/isEmpty';
import React, { useCallback, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Keyboard, StatusBar, View } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { makeCall } from '../../../../../utils/device';
import { useAction, useSelector } from '../../../../../utils/hooks';
import NavigatorService from '../../../../../utils/navigation';
import { EscortType } from '../EscortTypeScreen/types';
import { startEscortRequest } from '../RequestScreen/actions';
import { getIntersectOrganizationsRequest, toggleSelectOrganization } from './actions';
import messages from './messages';
import { makeSelectEnableContinueButton, makeSelectError, makeSelectErrorMessage, makeSelectIntersectOrganizations, makeSelectRequestingOrganizations } from './selectors';
import { AddCommentInput, AddCommentRow, AddCommentText, Call911Button, Call911Container, Call911Info, Call911Title, Container, CreateEscortButtonRow, ErrorMessage, ErrorRow, InfoRow, InfoText, ItemCheckImage, ItemRow, ItemText, List } from './styles';
const EscortScreen = ({
  isFocused
}) => {
  const {
    formatMessage
  } = useIntl();
  const [comment, setComment] = useState('');
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);
  const organizations = useSelector(makeSelectIntersectOrganizations());
  const nextButtonEnabled = useSelector(makeSelectEnableContinueButton());
  const error = useSelector(makeSelectError());
  const errorMessage = useSelector(makeSelectErrorMessage());
  const requestingOrganizations = useSelector(makeSelectRequestingOrganizations());
  const toggleSelectOrganizationAction = useAction(toggleSelectOrganization);
  const getIntersectOrganizationsAction = useAction(getIntersectOrganizationsRequest);
  const setLocation = useAction(UpdateLocationData);
  const startEscortAction = useAction(startEscortRequest);
  useEffect(() => {
    if (isFocused) {
      getIntersectOrganizationsAction(setLocation);
    }
    let subscriptions;
    subscriptions = [Keyboard.addListener('keyboardDidShow', () => setIsKeyboardShow(true)), Keyboard.addListener('keyboardDidHide', () => setIsKeyboardShow(false))];
    return () => {
      subscriptions.forEach(s => {
        var _s$remove;
        return s === null || s === void 0 || (_s$remove = s.remove) === null || _s$remove === void 0 ? void 0 : _s$remove.call(s);
      });
    };
  }, [isFocused]);
  const call911 = useCallback(() => makeCall('911'), []);
  const handleStartEscort = useCallback(() => {
    startEscortAction(setLocation, comment);
    setComment('');
    NavigatorService.navigate(Screens.Home.Escort.EscortRequest, {
      isPanic: false,
      requestType: EscortType.Live
    });
  }, [setLocation, comment]);
  if (requestingOrganizations) return /*#__PURE__*/React.createElement(LoadingIndicator, null);
  const renderHeader = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    title: formatMessage(messages.title)
  }), /*#__PURE__*/React.createElement(InfoRow, null, /*#__PURE__*/React.createElement(InfoText, null, formatMessage(messages.info))), error && /*#__PURE__*/React.createElement(ErrorRow, null, /*#__PURE__*/React.createElement(ErrorMessage, null, errorMessage)));
  const renderItem = itemInfo => {
    const organization = itemInfo.item;
    return /*#__PURE__*/React.createElement(ItemRow, {
      onPress: () => toggleSelectOrganizationAction(organization.id)
    }, /*#__PURE__*/React.createElement(React.Fragment, null, organization.isSelected && /*#__PURE__*/React.createElement(ItemCheckImage, {
      source: images.icCheck()
    }), /*#__PURE__*/React.createElement(ItemText, null, itemInfo.item.name)));
  };
  const renderOrganizations = () => {
    {
      console.log("render org==>", organizations);
    }
    if (isEmpty(organizations)) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
        title: formatMessage(messages.title)
      }), /*#__PURE__*/React.createElement(Call911Container, null, /*#__PURE__*/React.createElement(Call911Title, null, formatMessage(messages.call911Title)), /*#__PURE__*/React.createElement(Call911Info, null, formatMessage(messages.call911Info)), /*#__PURE__*/React.createElement(Call911Button, {
        text: formatMessage(messages.call911),
        onPress: call911
      })));
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, renderHeader(), /*#__PURE__*/React.createElement(List, {
      keyExtractor: org => {
        var _org$id;
        return (org === null || org === void 0 || (_org$id = org.id) === null || _org$id === void 0 ? void 0 : _org$id.toString()) || '';
      },
      data: organizations || [],
      extraData: organizations,
      renderItem: renderItem
    }), /*#__PURE__*/React.createElement(View, {
      style: {
        marginTop: 'auto'
      }
    }, /*#__PURE__*/React.createElement(AddCommentText, null, formatMessage(messages.addComment)), /*#__PURE__*/React.createElement(AddCommentRow, null, /*#__PURE__*/React.createElement(AddCommentInput, {
      keyboardAppearance: "light",
      placeholder: formatMessage(messages.commentPlaceholder),
      value: comment,
      onChangeText: setComment,
      multiline: true,
      numberOfLines: 4
    }))), /*#__PURE__*/React.createElement(CreateEscortButtonRow, null, /*#__PURE__*/React.createElement(ScreenActionButton, {
      disabled: !nextButtonEnabled,
      text: formatMessage(messages.requestEscort),
      onPress: handleStartEscort
    })));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/React.createElement(SafeAreaContainer, null, /*#__PURE__*/React.createElement(Container, {
    isKeyboard: isKeyboardShow
  }, renderOrganizations())));
};
export default withNavigationFocus(EscortScreen);
//# sourceMappingURL=index.js.map
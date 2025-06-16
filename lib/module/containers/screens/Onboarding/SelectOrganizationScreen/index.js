import { colors, images } from '../../../../assets';
import { GradientButton, LoadingIndicator, SafeAreaContainer } from '../../../../components';
import { debounce } from 'incident-code-core';
import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { Image, StatusBar } from 'react-native';
import { useAction, useSelector } from '../../../../utils/hooks';
import NavigatorService from '../../../../utils/navigation';
import { getOrganizationsRequest, toggleSelectOrganization, updateOrganizationsRequest } from './actions';
import messages from './messages';
import { makeSelectEnableNextButton, makeSelectError, makeSelectErrorMessage, makeSelectOrganizations, makeSelectSelectedOrganizations } from './selectors';
import { Background, ContinueButtonRow, ErrorMessage, ErrorRow, HeaderRow, InfoRow, InfoText, ItemCheckImage, ItemRow, ItemText, List, Logo, LogoRow, RequiredText, SearchInput, SearchRow, SelectButton, TitleRow, TitleText } from './styles';
const SelectOrganizationScreen = ({
  navigation: {
    getParam
  }
}) => {
  const fromMenu = getParam('fromMenu');
  const {
    formatMessage
  } = useIntl();
  const organizations = useSelector(makeSelectOrganizations());
  const selectedOrganizations = useSelector(makeSelectSelectedOrganizations());
  const nextButtonEnabled = useSelector(makeSelectEnableNextButton());
  const error = useSelector(makeSelectError());
  const errorMessage = useSelector(makeSelectErrorMessage());
  const getOrganizationsAction = useAction(getOrganizationsRequest);
  const updateOrganizationsAction = useAction(updateOrganizationsRequest);
  const toggleSelectOrganizationAction = useAction(toggleSelectOrganization);
  useEffect(() => {
    getOrganizationsAction();
  }, []);
  if (!organizations) return /*#__PURE__*/React.createElement(LoadingIndicator, null);
  const onSearchChanged = debounce(keyword => {
    getOrganizationsAction(keyword);
  }, 300);
  const handleNextButtonClicked = () => {
    updateOrganizationsAction({
      data: selectedOrganizations,
      fromMenu
    });
  };
  const renderHeader = () => /*#__PURE__*/React.createElement(React.Fragment, null, fromMenu ? /*#__PURE__*/React.createElement(HeaderRow, null, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement(TitleRow, null, /*#__PURE__*/React.createElement(TitleText, null, formatMessage(messages.title))), /*#__PURE__*/React.createElement(InfoRow, null, /*#__PURE__*/React.createElement(InfoText, null, formatMessage(messages.info, {
    required: /*#__PURE__*/React.createElement(RequiredText, {
      key: "1"
    }, formatMessage(messages.required))
  })))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LogoRow, null, /*#__PURE__*/React.createElement(Image, {
    source: images.logoWithText()
  })), /*#__PURE__*/React.createElement(InfoRow, null, /*#__PURE__*/React.createElement(InfoText, null, formatMessage(messages.info, {
    required: /*#__PURE__*/React.createElement(RequiredText, {
      key: "1"
    }, formatMessage(messages.required))
  })))), /*#__PURE__*/React.createElement(SearchRow, null, /*#__PURE__*/React.createElement(SearchInput, {
    keyboardAppearance: "light",
    placeholder: formatMessage(messages.searchPlaceholder),
    onChangeText: onSearchChanged
  })), error && /*#__PURE__*/React.createElement(ErrorRow, null, /*#__PURE__*/React.createElement(ErrorMessage, null, errorMessage)));
  const renderItem = itemInfo => {
    const organization = itemInfo.item;
    return /*#__PURE__*/React.createElement(ItemRow, {
      onPress: () => toggleSelectOrganizationAction(organization.id)
    }, /*#__PURE__*/React.createElement(React.Fragment, null, organization.isSelected && /*#__PURE__*/React.createElement(ItemCheckImage, {
      source: images.icCheck()
    }), /*#__PURE__*/React.createElement(ItemText, null, itemInfo.item.name)));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), !fromMenu && /*#__PURE__*/React.createElement(Background, null), /*#__PURE__*/React.createElement(SafeAreaContainer, null, /*#__PURE__*/React.createElement(List, {
    keyExtractor: organization => {
      var _organization$id;
      return ((_organization$id = organization.id) === null || _organization$id === void 0 ? void 0 : _organization$id.toString()) || '';
    },
    ListHeaderComponent: renderHeader(),
    data: organizations,
    extraData: organizations,
    renderItem: renderItem
  }), fromMenu ? /*#__PURE__*/React.createElement(ContinueButtonRow, null, /*#__PURE__*/React.createElement(SelectButton, {
    disabled: !nextButtonEnabled,
    onCancel: NavigatorService.back,
    text: formatMessage(messages.select),
    onPress: handleNextButtonClicked,
    tintColor: colors.white
  })) : /*#__PURE__*/React.createElement(ContinueButtonRow, null, /*#__PURE__*/React.createElement(GradientButton, {
    disabled: !nextButtonEnabled,
    text: formatMessage(messages.next),
    onPress: handleNextButtonClicked
  }))));
};
export default SelectOrganizationScreen;
//# sourceMappingURL=index.js.map
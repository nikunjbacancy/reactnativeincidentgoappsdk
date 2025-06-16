import { images } from '../../../../../assets';
import { Header, LoadingIndicator, SafeAreaContainer, ScreenActionButton } from '../../../../../components';
import Screens from '../../../../../containers/providers/RoutesProvider/screens';
import isEmpty from 'lodash/isEmpty';
import React, { useCallback, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Keyboard, StatusBar, View } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { makeCall } from '../../../../../utils/device';
import { useAction, useSelector } from '../../../../../utils/hooks';
import NavigatorService from '../../../../../utils/navigation';
import { getIntersectOrganizationsRequest, getOrganizationProceduresRequest, toggleSelectOrganization, toggleSelectProcedure } from './actions';
import messages from './messages';
import { makeSelectEnableNextButton, makeSelectError, makeSelectErrorMessage, makeSelectIntersectOrganizations, makeSelectOrganizationProcedures, makeSelectRequestingOrganizations, makeSelectSelectedOrganization, makeSelectSelectedProcedure } from './selectors';
import { Call911Button, Call911Container, Call911Info, Call911Title, Container, ErrorMessage, ErrorRow, InfoRow, InfoText, ItemCheckImage, ItemRow, ItemText, List, NextButtonRow, ProcedureList } from './styles';
const EscortScreen = ({
  isFocused,
  navigation
}) => {
  const isSafetyTimer = navigation.getParam('safetyTimer');
  const {
    formatMessage
  } = useIntl();
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);
  const [checkedOrg, setCheckedOrg] = useState(null);
  const organizations = useSelector(makeSelectIntersectOrganizations());
  const organization = useSelector(makeSelectSelectedOrganization());
  const procedures = useSelector(makeSelectOrganizationProcedures());
  const procedure = useSelector(makeSelectSelectedProcedure());
  const nextButtonEnabled = useSelector(makeSelectEnableNextButton());
  const error = useSelector(makeSelectError());
  const errorMessage = useSelector(makeSelectErrorMessage());
  const requestingOrganizations = useSelector(makeSelectRequestingOrganizations());
  console.log("=requestingOrganizations===>", requestingOrganizations);
  const toggleSelectOrganizationAction = useAction(toggleSelectOrganization);
  const toggleSelectProcedureAction = useAction(toggleSelectProcedure);
  const getIntersectOrganizationsAction = useAction(getIntersectOrganizationsRequest);
  const getOrganizationProceduresAction = useAction(getOrganizationProceduresRequest);
  const goToSelectProcedure = () => {
    if (checkedOrg) {
      toggleSelectOrganizationAction(checkedOrg);
      if (!isSafetyTimer) {
        getOrganizationProceduresAction(checkedOrg);
      } else {
        goToSafetyTimerCountdown();
      }
    }
  };
  const goToCountdownAction = () => {
    NavigatorService.navigate(Screens.Home.Escort.Countdown, {
      procedure,
      organization
    });
  };
  const goToSafetyTimerCountdown = () => {
    NavigatorService.navigate(Screens.Home.Escort.Countdown, {
      procedure,
      organization,
      isSafetyTimer
    });
  };
  const procedureSelectionBack = () => {
    toggleSelectProcedureAction(null);
    toggleSelectOrganizationAction(null);
    if (organizations && organizations.length <= 1) {
      NavigatorService.navigate(Screens.Home.Escort.EscortType);
    }
  };
  useEffect(() => {
    console.log("organization====>", organization);
    console.log("isSafetyTimer====>", isSafetyTimer);
    if (organization && isSafetyTimer) {
      goToSafetyTimerCountdown();
    }
  }, [organization, isSafetyTimer]);
  useEffect(() => {
    if (isFocused) {
      getIntersectOrganizationsAction();
      let subscriptions;
      subscriptions = [Keyboard.addListener('keyboardDidShow', () => setIsKeyboardShow(true)), Keyboard.addListener('keyboardDidHide', () => setIsKeyboardShow(false))];
      return () => {
        subscriptions.forEach(s => {
          var _s$remove;
          return s === null || s === void 0 || (_s$remove = s.remove) === null || _s$remove === void 0 ? void 0 : _s$remove.call(s);
        });
      };
    } else {
      return () => {};
    }
  }, [isFocused]);
  useEffect(() => {
    if ((organizations === null || organizations === void 0 ? void 0 : organizations.length) === 1) {
      const {
        id
      } = organizations[0];
      if (id !== checkedOrg) {
        setCheckedOrg(id);
        toggleSelectOrganizationAction(id);
        if (!isSafetyTimer) {
          getOrganizationProceduresAction(id);
        }
      }
    }
  }, [organizations === null || organizations === void 0 ? void 0 : organizations.length]);
  const call911 = useCallback(() => makeCall('911'), []);
  if (requestingOrganizations) return /*#__PURE__*/React.createElement(LoadingIndicator, null);
  const renderTimedHeader = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    title: formatMessage(messages.timedTitle)
  }), /*#__PURE__*/React.createElement(InfoRow, null, /*#__PURE__*/React.createElement(InfoText, null, formatMessage(messages.timedInfo))), error && /*#__PURE__*/React.createElement(ErrorRow, null, /*#__PURE__*/React.createElement(ErrorMessage, null, errorMessage)));
  const renderSafetyHeader = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    title: formatMessage(messages.safetyTitle)
  }), /*#__PURE__*/React.createElement(InfoRow, null, /*#__PURE__*/React.createElement(InfoText, null, formatMessage(messages.safetyInfo))), error && /*#__PURE__*/React.createElement(ErrorRow, null, /*#__PURE__*/React.createElement(ErrorMessage, null, errorMessage)));
  const renderItem = itemInfo => {
    const org = itemInfo.item;
    return /*#__PURE__*/React.createElement(ItemRow, {
      onPress: () => setCheckedOrg(org.id)
    }, /*#__PURE__*/React.createElement(React.Fragment, null, org.id === checkedOrg && /*#__PURE__*/React.createElement(ItemCheckImage, {
      source: images.icCheck()
    }), /*#__PURE__*/React.createElement(ItemText, null, `${org.name}`)));
  };
  const renderOrganizations = () => {
    console.log("organizations=>", organizations);
    if (isEmpty(organizations)) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
        title: isSafetyTimer ? formatMessage(messages.safetyTitle) : formatMessage(messages.timedTitle)
      }), /*#__PURE__*/React.createElement(Call911Container, null, /*#__PURE__*/React.createElement(Call911Title, null, isSafetyTimer ? formatMessage(messages.safetyCall911Title) : formatMessage(messages.timedCall911Title)), /*#__PURE__*/React.createElement(Call911Info, null, formatMessage(messages.call911Info)), /*#__PURE__*/React.createElement(Call911Button, {
        text: formatMessage(messages.call911),
        onPress: call911
      })));
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, isSafetyTimer ? renderSafetyHeader() : renderTimedHeader(), /*#__PURE__*/React.createElement(List, {
      keyExtractor: org => {
        var _org$id;
        return (org === null || org === void 0 || (_org$id = org.id) === null || _org$id === void 0 ? void 0 : _org$id.toString()) || '';
      },
      data: organizations || []
      // extraData={organizations}
      ,
      renderItem: renderItem
    }), /*#__PURE__*/React.createElement(View, {
      style: {
        marginTop: 'auto'
      }
    }), /*#__PURE__*/React.createElement(NextButtonRow, null, /*#__PURE__*/React.createElement(ScreenActionButton, {
      disabled: !checkedOrg,
      text: isSafetyTimer ? formatMessage(messages.next) : formatMessage(messages.selectProcedure),
      onPress: goToSelectProcedure,
      onCancel: NavigatorService.back
    })));
  };

  // TODO: refactor renderHeader to work for both scenarios
  const renderProcedureSelection = () => {
    const renderedProcedures = (procedures === null || procedures === void 0 ? void 0 : procedures.filter(p => p.organization === (organization === null || organization === void 0 ? void 0 : organization.id))) || [];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
      title: formatMessage(messages.timedTitle)
    }), /*#__PURE__*/React.createElement(InfoRow, null, /*#__PURE__*/React.createElement(InfoText, null, formatMessage(messages.procedureSelection))), error && /*#__PURE__*/React.createElement(ErrorRow, null, /*#__PURE__*/React.createElement(ErrorMessage, null, errorMessage)), !renderedProcedures.length && /*#__PURE__*/React.createElement(InfoRow, null, /*#__PURE__*/React.createElement(InfoText, null, formatMessage(messages.noProcedures))), procedures && /*#__PURE__*/React.createElement(ProcedureList, {
      keyExtractor: proc => {
        var _proc$id;
        return ((_proc$id = proc.id) === null || _proc$id === void 0 ? void 0 : _proc$id.toString()) || '';
      },
      data: renderedProcedures,
      extraData: renderedProcedures,
      renderItem: renderProcedure
    }), /*#__PURE__*/React.createElement(NextButtonRow, null, /*#__PURE__*/React.createElement(ScreenActionButton, {
      disabled: !nextButtonEnabled,
      text: formatMessage(messages.next),
      onPress: goToCountdownAction,
      onCancel: procedureSelectionBack
    })));
  };
  const renderProcedure = itemInfo => {
    const proced = itemInfo.item;
    return /*#__PURE__*/React.createElement(ItemRow, {
      onPress: () => toggleSelectProcedureAction(proced.id)
    }, /*#__PURE__*/React.createElement(React.Fragment, null, proced.isSelected && /*#__PURE__*/React.createElement(ItemCheckImage, {
      source: images.icCheck()
    }), /*#__PURE__*/React.createElement(ItemText, null, proced.name)));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/React.createElement(SafeAreaContainer, null, /*#__PURE__*/React.createElement(Container, {
    isKeyboard: isKeyboardShow
  }, organization ? renderProcedureSelection() : renderOrganizations())));
};
export default withNavigationFocus(EscortScreen);
//# sourceMappingURL=index.js.map
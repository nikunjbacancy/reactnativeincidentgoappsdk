import { SafeAreaContainer } from '../../../../components';
import Screens from '../../../../containers/providers/RoutesProvider/screens';
import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { StatusBar } from 'react-native';
import { useAction, useSelector } from '../../../../utils/hooks';
import { changePage, finishWelcome, nextPage, resetCurrentPage } from './actions';
import messages from './messages';
import PaginationDots from './PaginationDots';
import { makeSelectCurrentPage, makeSelectLastIndex, makeSelectWelcomeItems } from './selectors';
import { Background, BottomNav, NextButton, PaginationRow, SkipButton } from './styles';
import WelcomeSwiper from './WelcomeSwiper';
const WelcomeScreen = ({
  navigation: {
    replace,
    getParam,
    goBack
  }
}) => {
  const {
    formatMessage
  } = useIntl();
  const fromFeedback = getParam('fromFeedback');
  const currentPage = useSelector(makeSelectCurrentPage());
  const lastIndex = useSelector(makeSelectLastIndex());
  const welcomeItems = useSelector(makeSelectWelcomeItems());
  const changePageAction = useAction(changePage);
  const nextPageAction = useAction(nextPage);
  const finishWelcomeAction = useAction(finishWelcome);
  const resetCurrentPageAction = useAction(resetCurrentPage);
  useEffect(() => function componentWillUnmount() {
    resetCurrentPageAction();
  }, [fromFeedback]);
  const handleFinishWelcomeAction = () => {
    if (fromFeedback) return goBack();
    finishWelcomeAction();
    replace(Screens.Onboarding.SignIn);
    return null;
  };
  const handleNextPageAction = () => {
    if (currentPage + 1 > lastIndex - 1) {
      if (fromFeedback) return goBack();
      return handleFinishWelcomeAction();
    }
    nextPageAction();
    return null;
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/React.createElement(Background, null), /*#__PURE__*/React.createElement(SafeAreaContainer, null, /*#__PURE__*/React.createElement(WelcomeSwiper, {
    index: currentPage,
    onIndexChange: changePageAction,
    welcomeItems: welcomeItems
  }), /*#__PURE__*/React.createElement(PaginationRow, null, /*#__PURE__*/React.createElement(PaginationDots, {
    size: lastIndex,
    currentPage: currentPage
  })), /*#__PURE__*/React.createElement(BottomNav, null, /*#__PURE__*/React.createElement(SkipButton, {
    onPress: handleFinishWelcomeAction,
    text: formatMessage(messages.skip)
  }), /*#__PURE__*/React.createElement(NextButton, {
    onPress: handleNextPageAction
  }))));
};
export default WelcomeScreen;
//# sourceMappingURL=index.js.map
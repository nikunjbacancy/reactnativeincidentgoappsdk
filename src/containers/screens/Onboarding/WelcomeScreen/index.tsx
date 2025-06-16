import { SafeAreaContainer } from '../../../../components';
import Screens from '../../../../containers/providers/RoutesProvider/screens';
import React, { FC, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { StatusBar } from 'react-native';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { useAction, useSelector } from '../../../../utils/hooks';

import {
  changePage,
  finishWelcome,
  nextPage,
  resetCurrentPage,
} from './actions';
import messages from './messages';
import PaginationDots from './PaginationDots';
import {
  makeSelectCurrentPage,
  makeSelectLastIndex,
  makeSelectWelcomeItems,
} from './selectors';
import {
  Background,
  BottomNav,
  NextButton,
  PaginationRow,
  SkipButton,
} from './styles';
import WelcomeSwiper from './WelcomeSwiper';

interface Params {
  fromFeedback: boolean;
}
interface Props extends NavigationStackScreenProps<Params, ScreenProps> {}

const WelcomeScreen: FC<Props> = ({
  navigation: { replace, getParam, goBack },
}) => {
  const { formatMessage } = useIntl();

  const fromFeedback = getParam('fromFeedback');

  const currentPage = useSelector(makeSelectCurrentPage());
  const lastIndex = useSelector(makeSelectLastIndex());
  const welcomeItems = useSelector(makeSelectWelcomeItems());

  const changePageAction = useAction(changePage);
  const nextPageAction = useAction(nextPage);
  const finishWelcomeAction = useAction(finishWelcome);
  const resetCurrentPageAction = useAction(resetCurrentPage);

  useEffect(
    () =>
      function componentWillUnmount() {
        resetCurrentPageAction();
      },
    [fromFeedback],
  );

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
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Background />
      <SafeAreaContainer>
        <WelcomeSwiper
          index={currentPage}
          onIndexChange={changePageAction}
          welcomeItems={welcomeItems}
        />
        <PaginationRow>
          <PaginationDots size={lastIndex} currentPage={currentPage} />
        </PaginationRow>
        <BottomNav>
          <SkipButton
            onPress={handleFinishWelcomeAction}
            text={formatMessage(messages.skip)}
          />
          <NextButton onPress={handleNextPageAction} />
        </BottomNav>
      </SafeAreaContainer>
    </>
  );
};

export default WelcomeScreen;

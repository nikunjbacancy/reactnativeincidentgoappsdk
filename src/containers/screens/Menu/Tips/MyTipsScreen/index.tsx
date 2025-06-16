import { AppEvent, event } from '../../../../../api';
import { colors } from '../../../../../assets';
import {
  LoadingIndicator,
  SafeAreaContainer,
  ScreenActionButton,
} from '../../../../../components';
import Screens from '../../../../../containers/providers/RoutesProvider/screens';
import { Id, Incident } from 'incident-code-core';
import filter from 'lodash/filter';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { ScreenProps } from 'react-native-screens';
import { withNavigationFocus } from 'react-navigation';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { useAction, useSelector } from '../../../../../utils/hooks';
import NavigatorService from '../../../../../utils/navigation';
import { getBadges } from '../../../../../utils/notification';

import { getTipsRequest } from './actions';
import NoData from './NoData';
import { makeSelectIsLoading, makeSelectTips } from './selectors';
import { BackButtonRow, Container, List } from './styles';
import TipItem from './TipItem';
import { TipStatus } from './types';

interface ItemIncident {
  item: Incident;
}
interface Params {
  tipStatus: TipStatus;
}
interface Props extends NavigationStackScreenProps<Params, ScreenProps> {
  isFocused: boolean;
}

const MyTipsScreen: FC<Props> = ({ isFocused, navigation: { getParam } }) => {
  const tipStatus = getParam('tipStatus');

  const [badges, setBadges] = useState<Id[]>([]);

  const getTipsRequestAction = useAction(getTipsRequest);

  const tips = useSelector(makeSelectTips());
  const isLoading = useSelector(makeSelectIsLoading());

  useEffect(() => {
    getTipsRequestAction({ tipStatus, paging: false });
  }, [isFocused, tipStatus]);

  useEffect(() => {
    getBadges().then((notificationBadges: Id[]) => {
      setBadges(notificationBadges);
    });
    const onIncidentUpdated = () => {
      getTipsRequestAction({ tipStatus, paging: false });
    };
    const notificationAdded = (notificationBadges: Id[]) => {
      setBadges(notificationBadges);
    };
    event.on(AppEvent.OnNotificationBadge, notificationAdded);
    event.on(AppEvent.OnIncidentUpdated, onIncidentUpdated);
    return function componentDidUnMount() {
      event.off(AppEvent.OnNotificationBadge, notificationAdded);
      event.off(AppEvent.OnIncidentUpdated, onIncidentUpdated);
    };
  }, [setBadges]);

  const onEndReached = useCallback(() => {
    if (tips[tipStatus].hasMoreData) {
      getTipsRequestAction({ tipStatus, paging: true });
    }
  }, [tips, tipStatus]);

  const goToTipDetail = (incident: Incident) => {
    NavigatorService.navigate(Screens.Menu.Tips.TipDetail, { incident });
  };

  const renderReportItem = ({ item }: ItemIncident) => {
    return (
      <TouchableOpacity onPress={() => goToTipDetail(item)}>
        <TipItem
          badges={filter(badges, b => b === item?.id)}
          key={item?.id?.toString()}
          incident={item}
        />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaContainer>
        <Container>
          <List
            data={tips[tipStatus].data}
            keyExtractor={(item: any) => item.id?.toString() || ''}
            renderItem={renderReportItem}
            ListEmptyComponent={isLoading ? <LoadingIndicator /> : <NoData />}
            onEndReached={onEndReached}
            onEndReachedThreshold={2}
          />
        </Container>
        <BackButtonRow>
          <ScreenActionButton
            onCancel={() =>
              NavigatorService.navigate(Screens.Home.Escort.EscortType)
            }
            tintColor={colors.white}
          />
        </BackButtonRow>
      </SafeAreaContainer>
    </>
  );
};

export default withNavigationFocus(MyTipsScreen);

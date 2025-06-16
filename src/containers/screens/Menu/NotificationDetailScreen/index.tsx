// import NavigatorService from 'utils/navigation';
import { colors } from '../../../../assets';
import { Header, SafeAreaContainer, ScreenActionButton } from '../../../../components';
import React, { FC, useEffect } from 'react';
import { StatusBar, Text } from 'react-native';
import NavigatorService from '../../../../utils/navigation';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import {
  BackButtonRow,
  Container
} from './styles';

interface Params {
  detailItem: any;
}
interface Props extends NavigationStackScreenProps<Params, ScreenProps> { }

const NotificationDetailScreen: FC<Props> = ({ navigation: { getParam } }) => {

  // 
  let details = getParam('detailItem')
  console.log("Notfication detail ===>", details)

  useEffect(() => {

  })

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaContainer>
        <Header title={"Notification Detail"} />
        <Container>
          <Text style={{ marginHorizontal: 20, marginTop: 20 }}>
            {JSON.stringify(details)}
          </Text>
        </Container>
        <BackButtonRow>
          <ScreenActionButton
            onCancel={NavigatorService.back}
            tintColor={colors.white}
          />
        </BackButtonRow>
      </SafeAreaContainer>
    </>
  );
};


export default NotificationDetailScreen;

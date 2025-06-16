import { images } from '../../../../assets';
import React, { FC, useCallback } from 'react';
import { LINKS } from '../../../../containers/app/constants';
import {
    MainView,
    BackButtonCol,
    BackButtonView,
    WebViewStyle
  } from './styles';
  import {
    IconButton
  } from '../../../../components';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { WebView } from 'react-native-webview';

interface Params {
    phone: string;
}
interface Props extends NavigationStackScreenProps<Params, ScreenProps> {}

const PrivacyPolicyScreen: FC<Props> = ({ 
    navigation: { goBack }, 
}) => {
    const goBackToSignIn = useCallback(() => goBack(), []);
  return(
    <MainView>
        <BackButtonView>
            <BackButtonCol>
                <IconButton
                    source={images.icBackDark()}
                    onPress={goBackToSignIn}
                />
            </BackButtonCol>
        </BackButtonView>
        <WebViewStyle>
            <WebView 
                source={{ uri: LINKS.privacy}}
            />
        </WebViewStyle>
    </MainView>
  )
}

export default PrivacyPolicyScreen;

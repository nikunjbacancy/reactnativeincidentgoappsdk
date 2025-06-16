import React from 'react';
import { ViewStyle } from 'react-native';
interface Props {
    style?: ViewStyle;
    keyboardStyle?: ViewStyle;
}
declare const _default: import("styled-components").StyledComponent<React.FC<Props>, {
    text: {
        color: string;
        fontSize: string;
        fontFamily: string;
    };
    highlightText: {
        color: string;
        fontSize: string;
        fontFamily: string;
    };
    lightText: {
        color: string;
        fontSize: string;
        fontFamily: string;
    };
    greyText: {
        color: string;
        fontSize: string;
        fontFamily: string;
    };
    fonts: {
        defaultFamily: string;
        defaultBoldFamily: string;
        defaultSemiBoldFamily: string;
        defaultLightFamily: string;
        normalSize: string;
        largeSize: string;
        extraLargeSize: string;
        titleSize: string;
        normalLineSpacing: string;
        smallSize: string;
        extraSmallSize: string;
    };
    colors: {
        background: string;
        background2: string;
        background3: string;
        background4: string;
        background5: string;
        gradientColors: string[];
        grey: string;
        grey1: string;
        lightGrey: string;
        highlight: string;
        highlight2: string;
        highlight3: string;
        dark: string;
        darker: string;
        light: string;
        lighter: string;
        nearWhite: string;
        primary: string;
        transparent: string;
        semiTransparent: string;
        white: string;
        black: string;
        red: string;
        darkRed: string;
        green: string;
        blue: string;
        mapOverlay: string[];
        trackThumbOverlay: string[];
        videoCardOverlay: string[];
    };
    sdkBackgroundColor: string;
    sdkServiceBackgroundColor: string;
    device: {
        isIos: boolean;
        isAndroid: boolean;
        hasNotch: boolean;
    };
}, {}, never>;
export default _default;

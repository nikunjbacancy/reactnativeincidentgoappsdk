import { NavigationBackActionPayload, NavigationContainerComponent, NavigationParams, NavigationPopToTopActionPayload, NavigationState } from 'react-navigation';
declare const NavigatorService: {
    navigate: (routeName: string, params?: NavigationParams) => void;
    back: (options?: NavigationBackActionPayload) => void;
    popToTop: (options?: NavigationPopToTopActionPayload) => void;
    setTopLevelNavigator: (navigatorRef: NavigationContainerComponent | null) => void;
    logScreen: (prevState: NavigationState, currentState: NavigationState) => void;
};
export default NavigatorService;

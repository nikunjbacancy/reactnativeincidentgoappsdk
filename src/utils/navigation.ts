import {
  NavigationActions,
  NavigationBackActionPayload,
  NavigationContainerComponent,
  NavigationParams,
  NavigationPopToTopActionPayload,
  NavigationState,
  StackActions,
} from 'react-navigation';

import fbLogScreen from './firebase/logScreen';

let navigator: NavigationContainerComponent | null;


const setTopLevelNavigator = (
  navigatorRef: NavigationContainerComponent | null,
) => {
  navigator = navigatorRef;
};

const navigate = (routeName: string, params: NavigationParams = {}) => {
  if (navigator) {
    navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      }),
    );
  }
};

const back = (options?: NavigationBackActionPayload) => {
  if (navigator) {
    navigator.dispatch(NavigationActions.back(options));
  }
};

const popToTop = (options?: NavigationPopToTopActionPayload) => {
  if (navigator) {
    navigator.dispatch(StackActions.popToTop(options));
  }
};

// const reset = (routeName: string) => {
//   if (navigator) {
//     navigator.dispatch(
//       NavigationActions.reset({
//         index: 0,
//         actions: [
//           NavigationActions.navigate({ routeName: 'Portal'})
//         ],
//        key:null
//       })
//     );
//   }
// };


const getActiveRouteName = (navigationState: NavigationState): string => {
  if (!navigationState) {
    return '';
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
};

const logScreen = (
  prevState: NavigationState,
  currentState: NavigationState,
) => {
  const currentRouteName = getActiveRouteName(currentState);
  const previousRouteName = getActiveRouteName(prevState);

  if (previousRouteName !== currentRouteName) {
    // fbLogScreen(currentRouteName);
    fbLogScreen();
  }
};

const NavigatorService = {
  navigate,
  back,
  popToTop,
  setTopLevelNavigator,
  logScreen,
};

export default NavigatorService;

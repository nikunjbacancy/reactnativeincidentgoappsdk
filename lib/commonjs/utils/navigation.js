"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNavigation = require("react-navigation");
var _logScreen = _interopRequireDefault(require("./firebase/logScreen"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
let navigator;
const setTopLevelNavigator = navigatorRef => {
  navigator = navigatorRef;
};
const navigate = (routeName, params = {}) => {
  if (navigator) {
    navigator.dispatch(_reactNavigation.NavigationActions.navigate({
      routeName,
      params
    }));
  }
};
const back = options => {
  if (navigator) {
    navigator.dispatch(_reactNavigation.NavigationActions.back(options));
  }
};
const popToTop = options => {
  if (navigator) {
    navigator.dispatch(_reactNavigation.StackActions.popToTop(options));
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

const getActiveRouteName = navigationState => {
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
const logScreen = (prevState, currentState) => {
  const currentRouteName = getActiveRouteName(currentState);
  const previousRouteName = getActiveRouteName(prevState);
  if (previousRouteName !== currentRouteName) {
    // fbLogScreen(currentRouteName);
    (0, _logScreen.default)();
  }
};
const NavigatorService = {
  navigate,
  back,
  popToTop,
  setTopLevelNavigator,
  logScreen
};
var _default = exports.default = NavigatorService;
//# sourceMappingURL=navigation.js.map
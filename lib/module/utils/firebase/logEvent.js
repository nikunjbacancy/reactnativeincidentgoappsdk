import analytics from '@react-native-firebase/analytics';
const logEvent = (event, params) => {
  analytics().logEvent(event, params);
};
export default logEvent;
//# sourceMappingURL=logEvent.js.map
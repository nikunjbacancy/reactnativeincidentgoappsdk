import analytics from '@react-native-firebase/analytics';
const setUserId = async id => {
  await analytics().setUserId(id);
};
export default setUserId;
//# sourceMappingURL=setUserId.js.map
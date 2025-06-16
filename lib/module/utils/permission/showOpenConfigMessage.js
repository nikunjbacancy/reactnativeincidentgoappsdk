import Toast from 'react-native-root-toast';
const showOpenConfigMessage = message => new Promise(resolve => {
  Toast.show(message, {
    position: Toast.positions.BOTTOM - 100,
    duration: 2000,
    onHidden: () => resolve()
  });
});
export default showOpenConfigMessage;
//# sourceMappingURL=showOpenConfigMessage.js.map
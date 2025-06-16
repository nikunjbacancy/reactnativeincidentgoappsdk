import Toast from 'react-native-root-toast';

const showOpenConfigMessage = (message: string) =>
  new Promise<void>(resolve => {
    Toast.show(message, {
      position: Toast.positions.BOTTOM - 100,
      duration: 2000,
      onHidden: () => resolve(),
    });
  });

export default showOpenConfigMessage;

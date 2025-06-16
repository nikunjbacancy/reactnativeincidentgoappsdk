import analytics from '@react-native-firebase/analytics';

const setUserId = async (id: string) => {
  await analytics().setUserId(id);
};

export default setUserId;

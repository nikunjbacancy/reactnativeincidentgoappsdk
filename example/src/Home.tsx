
import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native'

export default HomeTabScreen = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{ justifyContent: 'center', flex: 1 }}
      onPress={() =>
        navigation.navigate('LoadModule', { name: 'Jane' })
      }
    >
      <Text style={{ alignSelf: 'center', fontSize: 16, textAlign:'center', marginHorizontal:30 }}>
        Hello{"\n"}{"\n"}This is host app where we launch our app via package{"\n"}{"\n"}
        Click Here to launch package
      </Text>
    </TouchableOpacity>
  );
};
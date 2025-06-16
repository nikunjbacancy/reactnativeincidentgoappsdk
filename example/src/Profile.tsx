
import * as React from 'react';
import {TouchableOpacity, Text} from 'react-native'

export default ProfileScreen = ({navigation}) => {
    return (
      <TouchableOpacity
        style={{justifyContent:'center',flex:1}}
        onPress={() =>
          navigation.navigate('Profile', {name: 'Jane'})
        }
      >
          <Text style={{alignSelf:'center'}}>Profile screem</Text>
      </TouchableOpacity>
    );
  };
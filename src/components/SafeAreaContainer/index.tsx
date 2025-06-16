import React, { FC } from 'react';
import { KeyboardAvoidingView, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { isIos } from '../../utils/device';
import styled from '../../utils/styled';

interface Props {
  style?: ViewStyle;
  keyboardStyle?: ViewStyle;
}

const SafeAreaContainer: FC<Props> = ({ style, keyboardStyle, children }) => (
  <SafeAreaView style={style}>
    {isIos ? (
      <KeyboardFixView style={keyboardStyle} behavior="padding">
        {children}
      </KeyboardFixView>
    ) : (
      <>{children}</>
    )}
  </SafeAreaView>
);

const KeyboardFixView = styled(KeyboardAvoidingView)`
  flex: 1;
`;

export default styled(SafeAreaContainer)`
  flex: 1;
  background: ${({ theme }) => theme.sdkBackgroundColor};
`;

import isEqual from 'lodash/isEqual';
import React, {
  FC,
  memo,
} from 'react';
import {
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity
} from 'react-native';
import styled from '../../utils/styled';

interface Props {
  text: string;
  onFill(): void;
  onPress(): void;
  isPanicMode: boolean;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  withIcon?: boolean;
}

const areEqual = (prevProps: any, nextProps: any) => {
  return isEqual(prevProps, nextProps);
};

const Call911Button: FC<Props> = ({
  text,
  onPress,
  textStyle,
  style,
}) => {

  return (
    <TouchableOpacity onPress={onPress}>
      <Button style={style}>
        <Text style={textStyle}>
          {text}
        </Text>
      </Button>
    </TouchableOpacity>
  );
};

const Button = styled.View`
  background-color: ${({ theme }) => theme.colors.darkRed};
  width: 47%;
  height: 40px;
  border-radius: 6px;
  justify-content: center;
  overflow: hidden;
`;

const Text = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  font-size: ${({ theme }) => theme.fonts.normalSize};
  text-align: center;
`;

export default memo(Call911Button, areEqual);

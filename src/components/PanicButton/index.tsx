import { colors, images } from '../../assets';
import isEqual from 'lodash/isEqual';
import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Animated,
  StyleProp,
  TextStyle,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';
import styled from '../../utils/styled';

const ACTION_TIMER = 2000;
const COLORS = [colors.red, colors.red];

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

const PanicButton: FC<Props> = ({
  text,
  onPress,
  onFill,
  isPanicMode,
  textStyle,
  style,
  withIcon,
}) => {
  const pressAction = new Animated.Value(0);
  const [buttonWidth, setButtonWidth] = useState(0);
  const [buttonHeight, setButtonHeight] = useState(0);
  const filledRef = useRef(false);

  useEffect(() => {
    if (!isPanicMode && filledRef.current) {
      filledRef.current = false;
      Animated.timing(pressAction, {
        duration: ACTION_TIMER / 10,
        toValue: 0,
        useNativeDriver:false
      }).start();
    }
  }, [filledRef.current, pressAction, isPanicMode]);

  const handlePressIn = useCallback(() => {
    onPress();
    Animated.timing(pressAction, {
      duration: ACTION_TIMER,
      toValue: 1,
      useNativeDriver:false
    }).start(callback => {
      if (callback.finished) {
        filledRef.current = true;
        onFill();
      }
    });
  }, [Animated, pressAction, onFill]);

  const handlePressOut = useCallback(() => {
    if (!filledRef.current) {
      Animated.timing(pressAction, {
        duration: ACTION_TIMER / 10,
        toValue: 0,
        useNativeDriver:false
      }).start();
    }
  }, [Animated, pressAction]);

  const getButtonWidthLayout = useCallback(event => {
    setButtonWidth(event.nativeEvent.layout.width);
    setButtonHeight(event.nativeEvent.layout.height);
  }, []);

  const getProgressStyles = useCallback(() => {
    const width = pressAction.interpolate({
      inputRange: [0, 1],
      outputRange: [0, buttonWidth],
    });
    const backgroundColor = pressAction.interpolate({
      inputRange: [0, 1],
      outputRange: COLORS,
    });
    return {
      width,
      height: buttonHeight,
      backgroundColor,
    };
  }, [pressAction, buttonWidth]);
  return (
    <TouchableWithoutFeedback
      disabled={isPanicMode}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Button onLayout={getButtonWidthLayout} style={style}>
        <BackgroundFill style={getProgressStyles()} />
        {withIcon && <Icon source={images.siren()} />}
        <Text style={textStyle}>{text}</Text>
      </Button>
    </TouchableWithoutFeedback>

    
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

const Icon = styled.Image`
  height: 40%;
  margin: 5px auto 10px;
  tint-color: ${({ theme }) => theme.colors.light};
  align-self: center;
`;

const BackgroundFill = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
`;

const Text = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  font-size: ${({ theme }) => theme.fonts.normalSize};
  text-align: center;
`;

export default memo(PanicButton, areEqual);

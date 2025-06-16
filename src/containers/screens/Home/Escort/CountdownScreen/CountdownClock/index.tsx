import { colors, fonts } from '../../../../../../assets';
import React, { FC, useEffect } from 'react';
import  CountDown from "../../../../../../components/CountDownComponent"
import { ClockWrapper } from './styles';

interface Props {
  inPanic?: boolean;
  warningTriggered?: boolean;
  onCountdownWarning(): void;
  id?: string;
  countdown?: number;
  running?: boolean;
  onPressed(): void;
  onFinish(): void;
}

const CountDownClock: FC<Props> = ({
  inPanic,
  onCountdownWarning,
  countdown,
  running,
  onPressed,
  warningTriggered,
  onFinish,
}) => {
  const OnCountDownChange = (e: number) => {
    // //("isPanic--->",inPanic)
    // //("warningTriggered--->",warningTriggered)
    if (e <= 36 && !inPanic && !warningTriggered) {
      onCountdownWarning();
    }
  };

  useEffect(() => {
    //("countdown-->",countdown)
  }, [countdown]);

  // //("countdown --->",countdown)
  // //("running timer --->",running)

  return (
    <ClockWrapper>
      {/* {//("local timer-->",localTimer)} */}
      {/* <TouchableOpacity style={{width:200,height:50,backgroundColor:'yellow'}} onPress={()=> onPressed()}>
      <Text>{countdown}</Text>
      </TouchableOpacity> */}
      <CountDown
        digitStyle={{ backgroundColor: colors.nearWhite }}
        digitTxtStyle={{
          color: colors.background3,
          fontFamily: fonts.defaultFamily, // Resolves OnePlus7T size issue
        }}
        // id={`key-${localTimer}`}
        until={countdown}
        size={40}
        timeToShow={['H', 'M', 'S']}
        running={running}
        onPress={onPressed}
        onFinish={onFinish}
        onChange={OnCountDownChange}
      />
    </ClockWrapper>
  );
};

export default CountDownClock;
// export default React.memo(CountDownClock, (prevProps, nextProps) => {
//   return (
//     prevProps.countdown === nextProps.countdown
//   );
// });
/**
 * colors.highlight2 = red
 * colors.highlight = dark blue/purple
 * colors.highlight3 = lighter purple
 */

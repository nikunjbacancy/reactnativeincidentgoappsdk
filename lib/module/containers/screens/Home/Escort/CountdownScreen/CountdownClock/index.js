import { colors, fonts } from '../../../../../../assets';
import React, { useEffect } from 'react';
import CountDown from 'react-native-countdown-component';
import { ClockWrapper } from './styles';
const CountDownClock = ({
  inPanic,
  onCountdownWarning,
  countdown,
  running,
  onPressed,
  warningTriggered,
  onFinish
}) => {
  const OnCountDownChange = e => {
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

  return /*#__PURE__*/React.createElement(ClockWrapper, null, /*#__PURE__*/React.createElement(CountDown, {
    digitStyle: {
      backgroundColor: colors.nearWhite
    },
    digitTxtStyle: {
      color: colors.background3,
      fontFamily: fonts.defaultFamily // Resolves OnePlus7T size issue
    }
    // id={`key-${localTimer}`}
    ,
    until: countdown,
    size: 40,
    timeToShow: ['H', 'M', 'S'],
    running: running,
    onPress: onPressed,
    onFinish: onFinish,
    onChange: OnCountDownChange
  }));
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
//# sourceMappingURL=index.js.map
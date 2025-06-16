"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
const useTimerInterval = ({
  interval,
  increment,
  onTimeChange,
  expire,
  onExpire
}) => {
  const [time, setTime] = (0, _react.useState)(0);
  const [shouldStart, setShouldStart] = (0, _react.useState)(false);
  const intervalRef = (0, _react.useRef)();
  const startTimer = () => {
    setShouldStart(true);
  };
  const stopTimer = () => {
    setShouldStart(false);
    setTime(0);
  };
  (0, _react.useEffect)(() => {
    if (shouldStart) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => {
          if (expire && intervalRef.current && prevTime + increment > expire) {
            if (onExpire) onExpire(prevTime);
            stopTimer();
            return 0;
          }
          if (onTimeChange) onTimeChange(prevTime + increment);
          return prevTime + increment;
        });
      }, interval);
    } else if (intervalRef.current) {
      setTime(0);
      clearInterval(intervalRef.current);
    }
  }, [shouldStart]);
  return {
    time,
    startTimer,
    stopTimer
  };
};
var _default = exports.default = useTimerInterval;
//# sourceMappingURL=useTimerInterval.js.map
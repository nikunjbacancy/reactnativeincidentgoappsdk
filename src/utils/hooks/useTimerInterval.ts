import { useEffect, useRef, useState } from 'react';

interface TimerIntervalProps {
  interval: number;
  increment: number;
  onTimeChange?: (time: number) => void;
  expire?: number;
  onExpire?: (time: number) => void;
}

const useTimerInterval = ({
  interval,
  increment,
  onTimeChange,
  expire,
  onExpire,
}: TimerIntervalProps) => {
  const [time, setTime] = useState(0);
  const [shouldStart, setShouldStart] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  const startTimer = () => {
    setShouldStart(true);
  };

  const stopTimer = () => {
    setShouldStart(false);
    setTime(0);
  };

  useEffect(() => {
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

  return { time, startTimer, stopTimer };
};

export default useTimerInterval;

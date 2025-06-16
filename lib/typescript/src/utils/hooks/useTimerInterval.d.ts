interface TimerIntervalProps {
    interval: number;
    increment: number;
    onTimeChange?: (time: number) => void;
    expire?: number;
    onExpire?: (time: number) => void;
}
declare const useTimerInterval: ({ interval, increment, onTimeChange, expire, onExpire, }: TimerIntervalProps) => {
    time: number;
    startTimer: () => void;
    stopTimer: () => void;
};
export default useTimerInterval;

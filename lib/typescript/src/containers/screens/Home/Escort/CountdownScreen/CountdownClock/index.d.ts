import { FC } from 'react';
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
declare const CountDownClock: FC<Props>;
export default CountDownClock;
/**
 * colors.highlight2 = red
 * colors.highlight = dark blue/purple
 * colors.highlight3 = lighter purple
 */

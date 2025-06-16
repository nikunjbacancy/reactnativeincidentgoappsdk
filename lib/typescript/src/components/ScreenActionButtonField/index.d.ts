import { FC } from 'react';
import { ScreenActionButtonProps } from '../ScreenActionButton';
interface Props extends ScreenActionButtonProps {
    disabledWhenNot?: string;
    submitWhenFormIsValid?: boolean;
}
declare const ScreenActionButtonField: FC<Props>;
export default ScreenActionButtonField;

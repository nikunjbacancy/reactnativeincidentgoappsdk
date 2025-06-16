import { FC } from 'react';
import { GradientButtonProps } from '../GradientButton';
export interface ScreenActionButtonProps extends GradientButtonProps {
    onCancel?(): void;
}
declare const ScreenActionButton: FC<ScreenActionButtonProps>;
export default ScreenActionButton;

import { FC } from 'react';
interface Props {
    isVisible: boolean;
    onShow(): void;
    onHide(): void;
    onPressYes?(): void;
}
declare const CancelTipModal: FC<Props>;
export default CancelTipModal;

import { FC } from 'react';
export declare enum ScreenActionModalType {
    Success = "Success",
    Error = "Error"
}
interface Props {
    type?: ScreenActionModalType;
    isVisible: boolean;
    title: string;
    message: string | JSX.Element;
    actionPositiveText: string;
    actionNagetiveText: string;
    onAction(): void;
    onHide(): void;
    showIcon: boolean;
    showActionIcon: boolean;
}
declare const PanicActionModal: FC<Props>;
export default PanicActionModal;

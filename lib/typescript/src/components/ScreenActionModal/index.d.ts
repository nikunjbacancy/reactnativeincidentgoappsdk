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
    actionText: string;
    onAction(): void;
    onHide(): void;
    showSuccessIcon?: boolean;
    showActionIcon?: boolean;
}
declare const TipCreatedModal: FC<Props>;
export default TipCreatedModal;

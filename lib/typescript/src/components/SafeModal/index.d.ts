import React from 'react';
interface Props {
    isVisible: boolean;
    hideModal(): void;
    onContinue(comment?: string): void;
    requestingImSafe: boolean;
    title: string;
    info: string;
    placeholder: string;
    alert: string;
    cancel: string;
    confirm: string;
    inputRequired: boolean;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;

import React from 'react';
interface Props {
    isVisible: boolean;
    hideModal(): void;
    onContinue(comment?: string): void;
    requestingImSafe: boolean;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;

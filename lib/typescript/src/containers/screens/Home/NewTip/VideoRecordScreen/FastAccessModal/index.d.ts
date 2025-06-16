import { Incident, Organization } from 'incident-code-core';
import { FC } from 'react';
interface Props {
    isVisible: boolean;
    hideModal(): void;
    incident?: Incident;
    organization?: Organization;
    onOpen(): void;
}
declare const FastAccessModal: FC<Props>;
export default FastAccessModal;

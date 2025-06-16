import { Id, Incident } from 'incident-code-core';
import { FC } from 'react';
interface Props {
    incident: Incident;
    badges: Id[];
}
declare const TipItem: FC<Props>;
export default TipItem;

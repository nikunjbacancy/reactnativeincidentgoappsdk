import { Id, IncidentType } from 'incident-code-core';
import { FC } from 'react';
interface Props {
    incidentType: IncidentType;
    active: boolean;
    category?: string;
    border: boolean;
    thumbnail?: string;
    badges?: Id[];
}
declare const IncidentCategoryImage: FC<Props>;
export default IncidentCategoryImage;

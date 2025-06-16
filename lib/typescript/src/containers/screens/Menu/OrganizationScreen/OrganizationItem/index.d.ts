import { Organization } from 'incident-code-core';
import { FC } from 'react';
interface Props {
    organization: Organization;
    onDelete(organization: Organization): void;
}
declare const OrganizationItem: FC<Props>;
export default OrganizationItem;

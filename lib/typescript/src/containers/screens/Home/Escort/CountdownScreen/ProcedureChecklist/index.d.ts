import { FC } from 'react';
import { CountdownAction } from '../../../../../../types';
interface Props {
    onActionChecked: (id: string | undefined, name: string, complete?: boolean | undefined) => void;
    actions: CountdownAction[] | undefined;
}
declare const ProcedureChecklist: FC<Props>;
export default ProcedureChecklist;

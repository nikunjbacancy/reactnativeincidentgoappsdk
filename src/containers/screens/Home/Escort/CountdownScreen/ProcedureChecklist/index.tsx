import { images } from '../../../../../../assets';
import React, { FC } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { CountdownAction } from '../../../../../../types';

import {
  ItemCheckImage,
  ItemRow,
  ItemText,
  List,
  ListContainer,
} from './styles';

interface Props {
  onActionChecked: (
    id: string | undefined,
    name: string,
    complete?: boolean | undefined,
  ) => void;
  actions: CountdownAction[] | undefined;
}

const ProcedureChecklist: FC<Props> = ({ onActionChecked, actions }) => {
  const renderAction = (actionInfo: ListRenderItemInfo<CountdownAction>) => {
    const action = actionInfo.item;

    return (
      <ItemRow
        onPress={() =>
          onActionChecked(action.id, action.name, action.isCompleted)
        }
      >
        <>
          <ItemText isCompleted={!!action.isCompleted}>{action.name}</ItemText>
          {action.isCompleted && <ItemCheckImage source={images.icCheck()} />}
        </>
      </ItemRow>
    );
  };

  return (
    <>
      <ListContainer>
        <List
          keyExtractor={(act : any) => act.id?.toString() || ''}
          data={actions || []}
          extraData={actions}
          renderItem={renderAction}
        />
      </ListContainer>
    </>
  );
};

export default ProcedureChecklist;

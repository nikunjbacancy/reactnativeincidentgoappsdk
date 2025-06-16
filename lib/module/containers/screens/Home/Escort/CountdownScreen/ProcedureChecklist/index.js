import { images } from '../../../../../../assets';
import React from 'react';
import { ItemCheckImage, ItemRow, ItemText, List, ListContainer } from './styles';
const ProcedureChecklist = ({
  onActionChecked,
  actions
}) => {
  const renderAction = actionInfo => {
    const action = actionInfo.item;
    return /*#__PURE__*/React.createElement(ItemRow, {
      onPress: () => onActionChecked(action.id, action.name, action.isCompleted)
    }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ItemText, {
      isCompleted: !!action.isCompleted
    }, action.name), action.isCompleted && /*#__PURE__*/React.createElement(ItemCheckImage, {
      source: images.icCheck()
    })));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ListContainer, null, /*#__PURE__*/React.createElement(List, {
    keyExtractor: act => {
      var _act$id;
      return ((_act$id = act.id) === null || _act$id === void 0 ? void 0 : _act$id.toString()) || '';
    },
    data: actions || [],
    extraData: actions,
    renderItem: renderAction
  })));
};
export default ProcedureChecklist;
//# sourceMappingURL=index.js.map
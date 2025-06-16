import { images } from '../../../../../assets';
import { Header, SafeAreaContainer } from '../../../../../components';
import { makeSelectNewTipOrganizationName } from '../../../../../containers/app/selectors';
import Screens from '../../../../../containers/providers/RoutesProvider/screens';
import map from 'lodash/map';
import React from 'react';
import { useIntl } from 'react-intl';
import { StatusBar } from 'react-native';
import { useAction, useSelector } from '../../../../../utils/hooks';
import NavigatorService from '../../../../../utils/navigation';
import { selectIncidentCategory } from './actions';
import messages from './messages';
import { makeSelectIncidentCategories, makeSelectSelectedCategory } from './selectors';
import { CategoryImage, CategoryText, Container, ContinueScreenActionButton, ImageBackground, ImageContainer, ImageSelected, InfoRow, InfoText, Row, RowContainer, RowItem, RowItemButton, TextContainer } from './styles';
const IncidentCategoryScreen = () => {
  const {
    formatMessage
  } = useIntl();
  const categories = useSelector(makeSelectIncidentCategories());
  const selectedCategory = useSelector(makeSelectSelectedCategory());
  const organizationName = useSelector(makeSelectNewTipOrganizationName());
  const selectCategoryAction = useAction(selectIncidentCategory);
  const goToIncidentCommentScreen = () => NavigatorService.navigate(Screens.Home.NewTip.AddComment);
  const renderImage = category => /*#__PURE__*/React.createElement(React.Fragment, null, category === selectedCategory ? /*#__PURE__*/React.createElement(ImageSelected, null, /*#__PURE__*/React.createElement(CategoryImage, {
    source: {
      uri: category.imageUrl
    }
  })) : /*#__PURE__*/React.createElement(ImageBackground, {
    colors: category.backgroundGradientColors
  }, /*#__PURE__*/React.createElement(CategoryImage, {
    source: {
      uri: category.imageUrl
    }
  })));
  const renderItem = category => /*#__PURE__*/React.createElement(RowItemButton, {
    key: category.name,
    onPress: () => selectCategoryAction(category)
  }, /*#__PURE__*/React.createElement(ImageContainer, {
    colors: category.backgroundGradientColors
  }, renderImage(category)), /*#__PURE__*/React.createElement(TextContainer, null, /*#__PURE__*/React.createElement(CategoryText, {
    adjustsFontSizeToFit: true,
    numberOfLines: 2
  }, category.display)));
  const renderRow = (items, index) => /*#__PURE__*/React.createElement(Row, {
    key: `Row${index}`
  }, items.length !== 3 && /*#__PURE__*/React.createElement(RowItem, {
    key: "Item-Left"
  }), map(items, renderItem), items.length !== 3 && /*#__PURE__*/React.createElement(RowItem, {
    key: "Item-Right"
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/React.createElement(SafeAreaContainer, null, /*#__PURE__*/React.createElement(Header, {
    title: formatMessage(messages.title)
  }), /*#__PURE__*/React.createElement(InfoRow, null, /*#__PURE__*/React.createElement(InfoText, null, formatMessage(messages.info, {
    organizationName
  }))), /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(RowContainer, null, map(categories, renderRow))), /*#__PURE__*/React.createElement(ContinueScreenActionButton, {
    disabled: !selectedCategory,
    onCancel: NavigatorService.back,
    onPress: goToIncidentCommentScreen,
    text: formatMessage(messages.continue),
    iconImage: images.icBack()
  })));
};
export default IncidentCategoryScreen;
//# sourceMappingURL=index.js.map
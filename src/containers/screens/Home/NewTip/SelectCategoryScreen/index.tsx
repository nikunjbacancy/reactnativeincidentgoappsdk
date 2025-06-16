import { images } from '../../../../../assets';
import { Header, SafeAreaContainer } from '../../../../../components';
import { makeSelectNewTipOrganizationName } from '../../../../../containers/app/selectors';
import Screens from '../../../../../containers/providers/RoutesProvider/screens';
import { IncidentCategoryConfig } from 'incident-code-core';
import map from 'lodash/map';
import React from 'react';
import { useIntl } from 'react-intl';
import { StatusBar } from 'react-native';
import { useAction, useSelector } from '../../../../../utils/hooks';
import NavigatorService from '../../../../../utils/navigation';

import { selectIncidentCategory } from './actions';
import messages from './messages';
import {
  makeSelectIncidentCategories,
  makeSelectSelectedCategory,
} from './selectors';
import {
  CategoryImage,
  CategoryText,
  Container,
  ContinueScreenActionButton,
  ImageBackground,
  ImageContainer,
  ImageSelected,
  InfoRow,
  InfoText,
  Row,
  RowContainer,
  RowItem,
  RowItemButton,
  TextContainer,
} from './styles';

const IncidentCategoryScreen = () => {
  const { formatMessage } = useIntl();

  const categories = useSelector(makeSelectIncidentCategories());
  const selectedCategory = useSelector(makeSelectSelectedCategory());
  const organizationName = useSelector(makeSelectNewTipOrganizationName());

  const selectCategoryAction = useAction(selectIncidentCategory);

  const goToIncidentCommentScreen = () =>
    NavigatorService.navigate(Screens.Home.NewTip.AddComment);

  const renderImage = (category: IncidentCategoryConfig) => (
    <>
      {category === selectedCategory ? (
        <ImageSelected>
          <CategoryImage source={{ uri: category.imageUrl }} />
        </ImageSelected>
      ) : (
        <ImageBackground colors={category.backgroundGradientColors}>
          <CategoryImage source={{ uri: category.imageUrl }} />
        </ImageBackground>
      )}
    </>
  );

  const renderItem = (category: IncidentCategoryConfig) => (
    <RowItemButton
      key={category.name}
      onPress={() => selectCategoryAction(category)}
    >
      <ImageContainer colors={category.backgroundGradientColors}>
        {renderImage(category)}
      </ImageContainer>
      <TextContainer>
        <CategoryText adjustsFontSizeToFit numberOfLines={2}>
          {category.display}
        </CategoryText>
      </TextContainer>
    </RowItemButton>
  );

  const renderRow = (items: IncidentCategoryConfig[], index: number) => (
    <Row key={`Row${index}`}>
      {items.length !== 3 && <RowItem key="Item-Left" />}
      {map(items, renderItem)}
      {items.length !== 3 && <RowItem key="Item-Right" />}
    </Row>
  );

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaContainer>
        <Header title={formatMessage(messages.title)} />
        <InfoRow>
          <InfoText>
            {formatMessage(messages.info, { organizationName })}
          </InfoText>
        </InfoRow>
        <Container>
          <RowContainer>{map(categories, renderRow)}</RowContainer>
        </Container>
        <ContinueScreenActionButton
          disabled={!selectedCategory}
          onCancel={NavigatorService.back}
          onPress={goToIncidentCommentScreen}
          text={formatMessage(messages.continue)}
          iconImage={images.icBack()}
        />
      </SafeAreaContainer>
    </>
  );
};

export default IncidentCategoryScreen;

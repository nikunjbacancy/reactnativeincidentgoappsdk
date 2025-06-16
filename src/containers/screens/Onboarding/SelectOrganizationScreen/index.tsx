import { colors, images } from '../../../../assets';
import {
  GradientButton,
  LoadingIndicator,
  SafeAreaContainer,
} from '../../../../components';
import { debounce } from 'incident-code-core';
import React, { FC, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { Image, ListRenderItemInfo, StatusBar } from 'react-native';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { OrganizationSelection } from 'types';
import { useAction, useSelector } from '../../../../utils/hooks';
import NavigatorService from '../../../../utils/navigation';

import {
  getOrganizationsRequest,
  toggleSelectOrganization,
  updateOrganizationsRequest,
} from './actions';
import messages from './messages';
import {
  makeSelectEnableNextButton,
  makeSelectError,
  makeSelectErrorMessage,
  makeSelectOrganizations,
  makeSelectSelectedOrganizations,
} from './selectors';
import {
  Background,
  ContinueButtonRow,
  ErrorMessage,
  ErrorRow,
  HeaderRow,
  InfoRow,
  InfoText,
  ItemCheckImage,
  ItemRow,
  ItemText,
  List,
  Logo,
  LogoRow,
  RequiredText,
  SearchInput,
  SearchRow,
  SelectButton,
  TitleRow,
  TitleText,
} from './styles';

interface Params {
  fromMenu: boolean;
}
interface Props extends NavigationStackScreenProps<Params, ScreenProps> {}

const SelectOrganizationScreen: FC<Props> = ({ navigation: { getParam } }) => {
  const fromMenu = getParam('fromMenu');

  const { formatMessage } = useIntl();

  const organizations = useSelector(makeSelectOrganizations());
  const selectedOrganizations = useSelector(makeSelectSelectedOrganizations());
  const nextButtonEnabled = useSelector(makeSelectEnableNextButton());
  const error = useSelector(makeSelectError());
  const errorMessage = useSelector(makeSelectErrorMessage());

  const getOrganizationsAction = useAction(getOrganizationsRequest);
  const updateOrganizationsAction = useAction(updateOrganizationsRequest);
  const toggleSelectOrganizationAction = useAction(toggleSelectOrganization);

  useEffect(() => {
    getOrganizationsAction();
  }, []);

  if (!organizations) return <LoadingIndicator />;

  const onSearchChanged = debounce((keyword?: string) => {
    getOrganizationsAction(keyword);
  }, 300);

  const handleNextButtonClicked = () => {
    updateOrganizationsAction({ data: selectedOrganizations, fromMenu });
  };

  const renderHeader = () => (
    <>
      {fromMenu ? (
        <HeaderRow>
          <Logo />
          <TitleRow>
            <TitleText>{formatMessage(messages.title)}</TitleText>
          </TitleRow>
          <InfoRow>
            <InfoText>
              {formatMessage(messages.info, {
                required: (
                  <RequiredText key="1">
                    {formatMessage(messages.required)}
                  </RequiredText>
                ),
              })}
            </InfoText>
          </InfoRow>
        </HeaderRow>
      ) : (
        <>
          <LogoRow>
            <Image source={images.logoWithText()} />
          </LogoRow>
          <InfoRow>
            <InfoText>
              {formatMessage(messages.info, {
                required: (
                  <RequiredText key="1">
                    {formatMessage(messages.required)}
                  </RequiredText>
                ),
              })}
            </InfoText>
          </InfoRow>
        </>
      )}
      <SearchRow>
        <SearchInput
          keyboardAppearance="light"
          placeholder={formatMessage(messages.searchPlaceholder)}
          onChangeText={onSearchChanged}
        />
      </SearchRow>
      {error && (
        <ErrorRow>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </ErrorRow>
      )}
    </>
  );

  const renderItem = (itemInfo: ListRenderItemInfo<OrganizationSelection>) => {
    const organization = itemInfo.item;

    return (
      <ItemRow onPress={() => toggleSelectOrganizationAction(organization.id)}>
        <>
          {organization.isSelected && (
            <ItemCheckImage source={images.icCheck()} />
          )}
          <ItemText>{itemInfo.item.name}</ItemText>
        </>
      </ItemRow>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      {!fromMenu && <Background />}
      <SafeAreaContainer>
        <List
          keyExtractor={(organization : any) => organization.id?.toString() || ''}
          ListHeaderComponent={renderHeader()}
          data={organizations}
          extraData={organizations}
          renderItem={renderItem}
        />

        {fromMenu ? (
          <ContinueButtonRow>
            <SelectButton
              disabled={!nextButtonEnabled}
              onCancel={NavigatorService.back}
              text={formatMessage(messages.select)}
              onPress={handleNextButtonClicked}
              tintColor={colors.white}
            />
          </ContinueButtonRow>
        ) : (
          <ContinueButtonRow>
            <GradientButton
              disabled={!nextButtonEnabled}
              text={formatMessage(messages.next)}
              onPress={handleNextButtonClicked}
            />
          </ContinueButtonRow>
        )}
      </SafeAreaContainer>
    </>
  );
};

export default SelectOrganizationScreen;

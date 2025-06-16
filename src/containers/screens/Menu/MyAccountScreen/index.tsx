import { colors } from '../../../../assets';
import {
  Form,
  Header,
  ImageUpload,
  SafeAreaContainer,
  ScreenActionButtonField,
} from '../../../../components';
import { makeSelectUser } from '../../../../containers/app/selectors';
import React, { FC, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Keyboard, ScrollView, StatusBar, EmitterSubscription } from 'react-native';
import Toast from 'react-native-root-toast';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { useAction, useSelector } from '../../../../utils/hooks';
import NavigatorService from '../../../../utils/navigation';

import {
  clearMessageType,
  deletePortraitRequest,
  updatePortraitRequest,
} from './actions';
import {
  UPDATE_MY_ACCOUNT_NAME_FAILURE,
  UPDATE_MY_ACCOUNT_NAME_REQUEST,
  UPDATE_MY_ACCOUNT_NAME_SUCCESS,
} from './constants';
import messages from './messages';
import {
  makeSelectSelectedIsUpdating,
  makeSelectUploadMessageType,
} from './selectors';
import {
  DescriptionText,
  FormContent,
  InfoRow,
  InfoText,
  InputRow,
  NameErrorField,
  NameInputField,
  UpdateButtonRow,
} from './styles';
import UpdateNameSchema from './validator';

interface Params { }
interface Props extends NavigationStackScreenProps<Params, ScreenProps> { }

const MyAccountScreen: FC<Props> = () => {
  const { formatMessage } = useIntl();
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  const { firstName, lastName, portraitUrl } = useSelector(makeSelectUser());
  const isUpdating = useSelector(makeSelectSelectedIsUpdating());
  const uploadMessageType = useSelector(makeSelectUploadMessageType());
  const deletePortrait = useAction(deletePortraitRequest);
  const savePortrait = useAction(updatePortraitRequest);
  const clearMessage = useAction(clearMessageType);

  const schema = UpdateNameSchema(formatMessage);
  const initialValues = {
    firstName,
    lastName,
  };

  const goBackWithMessage = () => {
    Toast.show(formatMessage(messages.accountUpdated), {
      position: Toast.positions.CENTER,
    });
    NavigatorService.back();
  };

  useEffect(() => {
    if (uploadMessageType) {
      return () => {
        clearMessage();
      };
    }
    return;
  }, [uploadMessageType]);

  useEffect(() => {
    let subscriptions: EmitterSubscription[];
    subscriptions = [
      Keyboard.addListener(
        'keyboardDidShow',
        () => setIsKeyboardShow(true),
      ),
      Keyboard.addListener(
        'keyboardDidHide',
        () => setIsKeyboardShow(false),
      )
    ];

    return () => {
      subscriptions.forEach((s) => s?.remove?.());
    }
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaContainer>
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
        >
          <Header title={formatMessage(messages.title)} />
          <InfoRow>
            <InfoText>{formatMessage(messages.info)}</InfoText>
          </InfoRow>
          {!isKeyboardShow && (
            <ImageUpload
              portraitUrl={portraitUrl}
              onUpload={savePortrait}
              onDelete={deletePortrait}
              actionInfoType={uploadMessageType}
            />
          )}
          <Form
            start={UPDATE_MY_ACCOUNT_NAME_REQUEST}
            resolve={UPDATE_MY_ACCOUNT_NAME_SUCCESS}
            reject={UPDATE_MY_ACCOUNT_NAME_FAILURE}
            initialValues={initialValues}
            validationSchema={schema}
            onResolve={goBackWithMessage}
            onReject={action =>
              Toast.show(action.payload.message, {
                position: Toast.positions.BOTTOM,
              })
            }
          >
            <FormContent>
              <DescriptionText>
                {formatMessage(messages.description)}
              </DescriptionText>
              <InputRow>
                <NameInputField
                  name="firstName"
                  autoCompleteType="off"
                  textContentType="none"
                  placeholder={formatMessage(messages.firstNamePlaceholder)}
                />
              </InputRow>
              <NameErrorField name="firstName" />
              <InputRow>
                <NameInputField
                  name="lastName"
                  autoCompleteType="off"
                  textContentType="none"
                  placeholder={formatMessage(messages.lastNamePlaceholder)}
                />
              </InputRow>
              <NameErrorField name="lastName" />
            </FormContent>
            <UpdateButtonRow>
              <ScreenActionButtonField
                disabled={isUpdating}
                loading={isUpdating}
                text={formatMessage(messages.update)}
                onCancel={NavigatorService.back}
                tintColor={colors.white}
              />
            </UpdateButtonRow>
          </Form>
        </ScrollView>
      </SafeAreaContainer>
    </>
  );
};

export default MyAccountScreen;

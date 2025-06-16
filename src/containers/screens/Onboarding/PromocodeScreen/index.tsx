import { images } from '../../../../assets';
import {
  Form,
  IconButton,
  PaddingView,
  SafeAreaContainer,
  SubmitButtonField,
} from '../../../../components';

import React, { FC, useCallback, useState } from 'react';
import { useIntl } from 'react-intl';
import { Image, ScrollView, StatusBar } from 'react-native';
import Toast from 'react-native-root-toast';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { useAction } from '../../../../utils/hooks';
import { registerUserRequest } from "./actions";
import messages from './messages';
import {
  BackButtonCol,
  Background,
  CodeTextField,
  InputRow,
  LogoRow,
  SubmitButtonRow,
  TitleRow,
  TitleText,
  ValidationRow,
  ValidationText
} from './styles';


import { REGISTER_USER_REQUEST } from './constants';


interface Params {
  phone: string;
  promoCodeData: any;
}
interface Props extends NavigationStackScreenProps<Params, ScreenProps> { }

const PromoCodeScreen: FC<Props> = ({
  navigation: { getParam, goBack },
}) => {
  const { formatMessage } = useIntl();

  // const schema = PromoCodeSchema(formatMessage);

  let promoCodeData = getParam('promoCodeData')

  const initialValues = { partnerCode: '', token: promoCodeData.token };

  const goBackToSignIn = useCallback(() => goBack(), []);

  const registerUserAction = useAction(registerUserRequest);

  const [input, setInput] = useState('');
  const handleNext = useCallback(() => {
    if (input === "") { return }
    let params = { partnerCode: input, token: promoCodeData.token };
    //("params-->", params)
    registerUserAction(params);
  }, [input, setInput]);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Background />
      <SafeAreaContainer>
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
        >
          <LogoRow>
            <BackButtonCol>
              <IconButton
                source={images.icBackDark()}
                onPress={goBackToSignIn}
              />
            </BackButtonCol>
            <Image source={images.logoWithText()} />
          </LogoRow>
          <TitleRow>
            <TitleText>
              {formatMessage(messages.title)}
            </TitleText>
          </TitleRow>
          <Form
            start={REGISTER_USER_REQUEST}
            resolve={""}
            reject={""}
            initialValues={initialValues}
            // validationSchema={schema}
            // onResolve={goToUpdateNameScreen}
            onReject={action =>
              Toast.show(action.payload.message, {
                position: Toast.positions.BOTTOM,
              })
            }
          >
            <>
              <InputRow>
                <CodeTextField
                  name="code"
                  keyboardAppearance="light"
                  placeholder={formatMessage(messages.codePlaceholder)}
                  value={input}
                  onChangeText={setInput}
                />
              </InputRow>
              <ValidationRow>
                <ValidationText>
                  {formatMessage(messages.invalidCode)}
                </ValidationText>
              </ValidationRow>
              {/* <CodeError>
                <Text>{formatMessage(messages.invalidCode)}</Text>
              </CodeError> */}
              <PaddingView size={1} />
            </>
            <SubmitButtonRow>
              <SubmitButtonField text={formatMessage(messages.next)}
                onPress={handleNext}
              />
            </SubmitButtonRow>
          </Form>
        </ScrollView>
      </SafeAreaContainer>
    </>
  );
};

export default PromoCodeScreen;

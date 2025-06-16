import { images } from '../../../../../assets';
import get from 'lodash/get';
import React, { FC } from 'react';
import { useIntl } from 'react-intl';

// import { Image } from 'react-native';
import messages from '../messages';
import { WelcomeItem } from '../types';
import { Container, Image, Text, Title } from './styles';

interface Props {
  welcomeItem: WelcomeItem;
}

const Welcome: FC<Props> = ({
  welcomeItem: { imageKey, titleKey, textKey },
}) => {
  const { formatMessage } = useIntl();
  const image = get(images, imageKey);
  const title = formatMessage(get(messages, titleKey));
  const text = formatMessage(get(messages, textKey));
  return (
    <Container>
      <Image source={image()} />
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
};

export default Welcome;

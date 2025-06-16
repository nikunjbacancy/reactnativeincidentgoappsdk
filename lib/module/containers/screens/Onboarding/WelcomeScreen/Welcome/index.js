import { images } from '../../../../../assets';
import get from 'lodash/get';
import React from 'react';
import { useIntl } from 'react-intl';

// import { Image } from 'react-native';
import messages from '../messages';
import { Container, Image, Text, Title } from './styles';
const Welcome = ({
  welcomeItem: {
    imageKey,
    titleKey,
    textKey
  }
}) => {
  const {
    formatMessage
  } = useIntl();
  const image = get(images, imageKey);
  const title = formatMessage(get(messages, titleKey));
  const text = formatMessage(get(messages, textKey));
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Image, {
    source: image()
  }), /*#__PURE__*/React.createElement(Title, null, title), /*#__PURE__*/React.createElement(Text, null, text));
};
export default Welcome;
//# sourceMappingURL=index.js.map
import { images } from '../../assets';
import { IncidentType } from 'incident-code-core';
import isEmpty from 'lodash/isEmpty';
import React from 'react';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useIncidentCategoryConfig } from '../../utils/hooks';
import styled, { css } from '../../utils/styled';
import Badge from '../Badge';
const IncidentCategoryImage = ({
  badges,
  incidentType,
  active,
  category,
  border,
  thumbnail
}) => {
  const incidentCategoryConfig = useIncidentCategoryConfig(category);
  const renderVideoThumb = () => {
    return thumbnail ? /*#__PURE__*/React.createElement(ImageBox, {
      source: {
        uri: thumbnail
      }
    }, /*#__PURE__*/React.createElement(Image, {
      source: images.icPlay()
    })) : /*#__PURE__*/React.createElement(LargeImage, {
      source: incidentType !== IncidentType.Normal ? images.icEscort() : {
        uri: incidentCategoryConfig.imageUrl
      }
    });
  };
  const renderImage = smaller => /*#__PURE__*/React.createElement(Container, {
    smaller: smaller
  }, category || incidentType !== IncidentType.Normal ? renderVideoThumb() : /*#__PURE__*/React.createElement(DotsContainer, null, /*#__PURE__*/React.createElement(Dot, null), /*#__PURE__*/React.createElement(DotWithMargin, null), /*#__PURE__*/React.createElement(Dot, null)));
  if (!border) return renderImage(true);
  return /*#__PURE__*/React.createElement(ImageContainer, null, /*#__PURE__*/React.createElement(GradientBorder, {
    colors: incidentCategoryConfig.backgroundGradientColors,
    start: {
      x: 0.0,
      y: 1.0
    },
    end: {
      x: 1.0,
      y: 0.0
    }
  }, renderImage()), !isEmpty(badges) && /*#__PURE__*/React.createElement(StyledBadge, {
    length: badges === null || badges === void 0 ? void 0 : badges.length
  }), /*#__PURE__*/React.createElement(ResolvedCircle, {
    active: active
  }));
};
const ImageContainer = styled.View`
  position: relative;
`;
const ResolvedCircle = styled.View`
  background-color: ${({
  active,
  theme: {
    colors
  }
}) => active ? colors.green : colors.blue};
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  bottom: -3px;
  right: -12px;
  border-width: 3px;
  border-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
const StyledBadge = styled(Badge)`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  top: -3px;
  right: -12px;
  border-width: 3px;
  border-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
const GradientBorder = styled(LinearGradient)`
  height: 42px;
  width: 42px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;
const smallerContainer = css`
  height: 42px;
  width: 42px;
  background-color: ${({
  theme
}) => theme.colors.background};
  border-radius: 15px;
`;
const imageBox = css`
  height: 42px;
  width: 42px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;
const ImageBox = styled.ImageBackground.attrs(() => ({
  imageStyle: {
    height: 42,
    width: 42,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
}))`
  ${imageBox}
`;
const Container = styled.View`
  ${imageBox}
  ${({
  smaller
}) => smaller && smallerContainer};
`;
const LargeImage = styled.Image`
  height: 36px;
  width: 36px;
  tint-color: ${({
  theme
}) => theme.colors.white};
`;
const DotsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Dot = styled.View`
  width: 7px;
  height: 7px;
  border-radius: ${() => `${7 / 2}px`};
  background-color: ${({
  theme
}) => theme.colors.white};
`;
const DotWithMargin = styled.View`
  ${Dot};
  margin-left: 4px;
  margin-right: 4px;
`;
export default IncidentCategoryImage;
//# sourceMappingURL=index.js.map
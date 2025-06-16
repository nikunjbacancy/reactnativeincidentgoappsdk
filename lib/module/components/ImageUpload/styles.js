import styled from '../../utils/styled';
import IconButton from '../IconButton';
export const UserPortraitContainer = styled.View`
  position: relative;
  margin: 15px;
  flex: 1;
`;
export const ImgDescriptionText = styled.Text(({
  theme: {
    text,
    colors,
    fonts
  }
}) => ({
  ...text,
  color: colors.lightGrey,
  fontSize: fonts.smallSize,
  textTransform: 'uppercase',
  textAlign: 'center',
  marginTop: 5
}));
export const UploadInfoContainer = styled.View`
  position: absolute;
  top: 10%;
  left: 50%;
  width: 200px;
  margin-left: -100px;
`;
export const UploadInfo = styled.Text(({
  theme: {
    text,
    colors,
    fonts
  }
}) => ({
  ...text,
  color: colors.lightGrey,
  fontSize: fonts.smallSize,
  textTransform: 'uppercase',
  textAlign: 'center',
  marginTop: 5
}));
export const ImageUploadContainer = styled.View`
  position: relative;
  flex: 1;
  padding: 15% 0;
`;
export const DeletePhoto = styled(IconButton)`
  position: absolute;
  bottom: 0;
  right: 10px;
`;
//# sourceMappingURL=styles.js.map
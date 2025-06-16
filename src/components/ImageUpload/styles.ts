import styled from '../../utils/styled';

import IconButton from '../IconButton';

export const UserPortraitContainer : any = styled.View`
  position: relative;
  margin: 15px;
  flex: 1;
`;

export const ImgDescriptionText : any = styled.Text(
  ({ theme: { text, colors, fonts } }) => ({
    ...text,
    color: colors.lightGrey,
    fontSize: fonts.smallSize,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: 5,
  }),
);

export const UploadInfoContainer : any = styled.View`
  position: absolute;
  top: 10%;
  left: 50%;
  width: 200px;
  margin-left: -100px;
`;

export const UploadInfo : any = styled.Text(({ theme: { text, colors, fonts } }) => ({
  ...text,
  color: colors.lightGrey,
  fontSize: fonts.smallSize,
  textTransform: 'uppercase',
  textAlign: 'center',
  marginTop: 5,
}));

export const ImageUploadContainer : any = styled.View`
  position: relative;
  flex: 1;
  padding: 15% 0;
`;

export const DeletePhoto = styled(IconButton as any)`
  position: absolute;
  bottom: 0;
  right: 10px;
`;

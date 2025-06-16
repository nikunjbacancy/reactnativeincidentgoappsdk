import { isAndroid } from '../utils/device/isAndroid'

const fonts = {
  defaultFamily: isAndroid ? 'proxima_nova_regular' : 'ProximaNova-Regular',
  // defaultFamily: 'proxima_nova_regular',
  defaultBoldFamily: isAndroid ? 'proxima_nova_bold' : 'ProximaNova-Bold',
  // defaultBoldFamily: 'proxima_nova_bold',
  defaultSemiBoldFamily: isAndroid
    ? 'proxima_nova_semibold'
    : 'ProximaNova-Semibold',
  // defaultSemiBoldFamily: 'proxima_nova_semibold',
  defaultLightFamily: isAndroid ? 'proxima_nova_light' : 'ProximaNova-Light',
  // defaultLightFamily:'proxima_nova_light',
  normalSize: '17px',
  largeSize: '19px',
  extraLargeSize: '24px',
  titleSize: '21px',
  normalLineSpacing: '26px',
  smallSize: '15px',
  extraSmallSize: '12px',
};

export default fonts;

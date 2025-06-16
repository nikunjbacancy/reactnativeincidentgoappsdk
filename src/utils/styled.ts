import { Theme } from '../assets/theme';
import * as styledComponents from 'styled-components/native';

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as any as styledComponents.ReactNativeThemedStyledComponentsModule<Theme>;

export { css, ThemeProvider };
export default styled;

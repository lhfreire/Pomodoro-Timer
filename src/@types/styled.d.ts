import 'styled-components';
import { defaultTheme } from '../styles/themes/default';


type ThemeType = typeof defaultTheme;

declare module 'styled-componentes' {
    export interface DefaultTheme extends ThemeType {}
}
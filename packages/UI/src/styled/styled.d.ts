import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    global: {
      fontSize: string;
      fontFamily: string;
    }
    colors: {
      main: string;
      main2: string;

      secondary: string

      bg: string;
      bg2: string;
      bg3: string;

      fontColor: string;
    }
  }
}
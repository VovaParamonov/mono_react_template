import { DefaultTheme } from 'styled-components';

const BaseThemeColors = {
  main: '#9c7be5',
  main2: '#6c35ec',

  secondary: '#7be5a9',

  bg: '#20222C',
  bg2: '#272E43',
  bg3: '#283351',

  fontColor: '#FFFFFFE5',
}

export const BaseTheme: DefaultTheme = {
  global: {
    fontSize: '14px',
    fontFamily: 'saira_semicondensed, Sans-Serif'
  },
  colors: BaseThemeColors
}
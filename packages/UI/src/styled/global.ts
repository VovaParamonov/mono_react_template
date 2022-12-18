import { createGlobalStyle, css, DefaultTheme } from "styled-components"

type GlobalStyleProps = {
  theme: DefaultTheme;
}

export default createGlobalStyle<GlobalStyleProps>`
  ${({ theme }) => {
    return css`
      html {
        font-family: ${theme.global.fontFamily};
        font-size: ${theme.global.fontSize};
      }
      
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
        background-color: ${theme.colors.bg};
        color: ${theme.colors.fontColor}
      }

      * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
      }

      #root {
        margin: 0 auto;
      }
    `;
  }}
`
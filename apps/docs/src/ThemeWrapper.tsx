import React, { FunctionComponent } from 'react';
import { BaseTheme, GlobalStyles } from '@AWSReactMonoTemplate/UI';
import { ThemeProvider } from 'styled-components';

type ThemeWrapperProps = {
    children: React.ReactNode;
};

const ThemeWrapper: FunctionComponent<ThemeWrapperProps> = ({ children }) => {
    return (
      <ThemeProvider theme={BaseTheme} >
        <GlobalStyles />
        { children }
      </ThemeProvider>
    );
}

export default ThemeWrapper;
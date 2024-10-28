/* istanbul ignore file */
'use client';
import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';
import { theme } from './theme';

const GlobalStyles = createGlobalStyle`

  ${reset}

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    height: 100%;
  }

  body {
    font-family: ${theme.font.primary};
    display: flex;
    height: 100%;
  }


`;

export default GlobalStyles;

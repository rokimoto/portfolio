'use client';
import React, { PropsWithChildren } from 'react';
import StyledComponentsRegistry from './lib/registry';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const Providers = (props: PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;

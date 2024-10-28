import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { ContentColor } from '@/app/styles/theme.d';

interface IconProps {
  size?: string | number;
  contentColor?: keyof ContentColor;
  theme: DefaultTheme;
}

const Email = ({ size = 24, contentColor = 'default', theme }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
  >
    <path
      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"
      fill={theme.contentColor[contentColor]}
    ></path>
  </svg>
);

export default withTheme(Email) as React.ComponentType<
  Omit<IconProps, 'theme'>
>;

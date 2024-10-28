import { Nunito } from 'next/font/google';
import 'styled-components';
import { assign } from 'lodash';

const nunito = Nunito({ subsets: ['latin'] });

const color = {
  white: '#FFFFFF',
  black: '#000000',
  red: '#CA0000',
};

const contentColor = {
  default: color.black,
  inverse: color.white,
  negative: color.red,
};

const backgroundColor = {
  body: color.white,
  inverse: color.black,
};

const borderColor = {
  default: color.black,
};

const spacing = {
  '2XS': '4px',
  XS: '8px',
  SM: '12px',
  MD: '16px',
  LG: '24px',
  XL: '32px',
  '2XL': '40px',
  '3XL': '48px',
  '4XL': '56px',
  '5XL': '64px',
};

const margin = {
  page: {
    desktop: spacing['5XL'],
    mobile: spacing.MD,
  },
};

const fontSize = {
  SM: '12px',
  MD: '14px',
  LG: '16px',
  XL: '20px',
  ['2XL']: '24px',
};

const lineHeight = {
  SM: '16px',
  MD: '20px',
  LG: '24px',
  XL: '24px',
  ['2XL']: '32px',
};

const fontWeight = {
  light: '300',
  regular: '400',
  bold: '700',
};

const font = {
  primary: `${nunito.style.fontFamily}, sans-serif`,
};

const theme = assign(
  { color },
  { contentColor },
  { backgroundColor },
  { borderColor },
  { spacing },
  { margin },
  { fontSize },
  { lineHeight },
  { fontWeight },
  { font },
);

export { theme };

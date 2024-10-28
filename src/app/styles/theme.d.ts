import 'styled-components';

interface Color {
  white: string;
  black: string;
  red: string;
}

interface ContentColor {
  default: string;
  inverse: string;
  negative: string;
}

interface BackgroundColor {
  body: string;
  inverse: string;
}

interface BorderColor {
  default: string;
}

interface Spacing {
  '2XS': string;
  XS: string;
  SM: string;
  MD: string;
  LG: string;
  XL: string;
  '2XL': string;
  '3XL': string;
  '4XL': string;
  '5XL': string;
}

interface Margin {
  page: {
    mobile: string;
    desktop: string;
  };
}

interface FontSize {
  SM: string;
  MD: string;
  LG: string;
  XL: string;
  ['2XL']: string;
}

interface LineHeight {
  SM: string;
  MD: string;
  LG: string;
  XL: string;
  ['2XL']: string;
}

interface FontWeight {
  light: string;
  regular: string;
  bold: string;
}

interface Font {
  primary: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color;
    contentColor: ContentColor;
    backgroundColor: BackgroundColor;
    borderColor: BorderColor;
    spacing: Spacing;
    margin: Margin;
    fontSize: FontSize;
    lineHeight: LineHeight;
    fontWeight: FontWeight;
    font: Font;
  }
}

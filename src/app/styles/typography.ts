import { css } from 'styled-components';

const Ag = {
  DisplayXL: css`
    ${({ theme }) => `
      font-family: ${theme.font.primary};
      color: ${theme.contentColor.default};
      font-weight: 700;
      letter-spacing: 0;
      font-size: 60px;
      line-height: 1;
    `}
  `,
  HeadingLG: css`
    ${({ theme }) => `
      font-family: ${theme.font.primary};
      color: ${theme.contentColor.default};
      font-weight: 700;
      letter-spacing: 0;
      font-size: 40px;
      line-height: 44px;
    `}
  `,
  HeadingMD: css`
    ${({ theme }) => `
      font-family: ${theme.font.primary};
      color: ${theme.contentColor.default};
      font-weight: 700;
      letter-spacing: 0;
      font-size: 32px;
      line-height: 36px;
    `}
  `,
  HeadingSM: css`
    ${({ theme }) => `
      font-family: ${theme.font.primary};
      color: ${theme.contentColor.default};
      font-weight: 700;
      letter-spacing: 0;
      font-size: 20px;
      line-height: 24px;
    `}
  `,
  ParagraphLG: css`
    ${({ theme }) => `
      font-family: ${theme.font.primary};
      color: ${theme.contentColor.default};
      font-weight: 400;
      letter-spacing: 0;
      font-size: 18px;
      line-height: 24px;
    `}
  `,
  ParagraphMD: css`
    ${({ theme }) => `
      font-family: ${theme.font.primary};
      color: ${theme.contentColor.default};
      font-weight: 400;
      letter-spacing: 0;
      font-size: 16px;
      line-height: 24px;
    `}
  `,
  ParagraphSM: css`
    ${({ theme }) => `
      font-family: ${theme.font.primary};
      color: ${theme.contentColor.default};
      font-weight: 400;
      letter-spacing: 0;
      font-size: 14px;
      line-height: 20px;
    `}
  `,
};

export default Ag;

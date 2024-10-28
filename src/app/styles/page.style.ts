import styled from 'styled-components';
import Ag from './typography';
import { media } from './breakpoints';

const S = {
  Page: styled.div`
    flex: 1;
    padding: ${({ theme }) =>
      `${theme.spacing['2XL']} ${theme.margin.page.mobile}`};
    ${media.MD} {
      padding: ${({ theme }) =>
        `${theme.spacing['5XL']} ${theme.margin.page.desktop}`};
      max-width: 500px;
    }
  `,
  Header: styled.h1`
    ${Ag.DisplayXL}
    margin-bottom: ${({ theme }) => theme.spacing.MD};
  `,
  Bio: styled.p`
    ${Ag.ParagraphLG}
    margin-bottom: ${({ theme }) => theme.spacing['5XL']};
  `,
  Section: styled.div`
    padding-bottom: ${({ theme }) => theme.spacing['5XL']};
  `,
  Projects: styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.LG};
  `,
  SectionTitle: styled.h2`
    ${Ag.HeadingMD};
    margin-bottom: ${({ theme }) => theme.spacing.MD};
  `,
  SectionDescription: styled.p`
    ${Ag.ParagraphMD}
  `,
  Socials: styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.XS};
  `,
  Social: styled.a``,
};

export default S;

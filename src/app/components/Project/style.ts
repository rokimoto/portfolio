import styled from 'styled-components';
import Ag from '@/app/styles/typography';

const S = {
  Project: styled.div``,
  Link: styled.a`
    display: table-cell;
    margin-bottom: ${({ theme }) => theme.spacing.XS};
  `,
  Title: styled.h3`
    ${Ag.HeadingSM}
    margin-right: ${({ theme }) => theme.spacing['2XS']};
    display: inline;
    vertical-align: middle;
  `,
  Icon: styled.div`
    display: inline;
    vertical-align: middle;
  `,
  Tags: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing['2XS']};
  `,
};

export default S;

import styled from 'styled-components';
import Ag from '@/app/styles/typography';

const S = {
  Project: styled.div``,
  Link: styled.a`
    display: block;
    margin-bottom: ${({ theme }) => theme.spacing.XS};
  `,
  Title: styled.div`
    ${Ag.HeadingSM}
  `,
  Company: styled.div`
    display: inline-block;
  `,
  Icon: styled.div`
    display: inline-block;
    position: relative;
    top: 4px;
    margin-left: ${({ theme }) => theme.spacing['2XS']};
  `,
  Tags: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing['2XS']};
  `,
};

export default S;

import styled from 'styled-components';
import Ag from '@/app/styles/typography';

const S = {
  Tag: styled.div`
    height: 24px;
    border-radius: 4px;
    padding-left: ${({ theme }) => theme.spacing['2XS']};
    padding-right: ${({ theme }) => theme.spacing['2XS']};
    background-color: rgba(255, 255, 255, 0.8);
    display: inline-flex;
    align-items: center;
  `,

  TagText: styled.div`
    ${Ag.ParagraphSM};
    color: ${({ theme }) => theme.contentColor.default};
    white-space: nowrap;
  `,
};

export default S;

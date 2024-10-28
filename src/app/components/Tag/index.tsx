import React from 'react';
// Style
import S from './style';

interface TagProps {
  text: string;
}

const Tag = ({ text }: TagProps) => {
  return (
    <S.Tag>
      <S.TagText>{text}</S.TagText>
    </S.Tag>
  );
};

export default Tag;

'use client';

import React from 'react';
import Tag from '@/app/components/Tag';
import OpenInNew from '@/app/icons/OpenInNew';
import S from './style';

interface ProjectProps {
  position?: string;
  company: string;
  link: string;
  skills: string[];
}

const Project = ({ position, company, link, skills }: ProjectProps) => {
  return (
    <S.Project>
      <S.Link href={link} target="_blank">
        <S.Title>
          {position && `${position} - `}
          <S.Company>
            {company}
            <S.Icon>
              <OpenInNew />
            </S.Icon>
          </S.Company>
        </S.Title>
      </S.Link>
      <S.Tags>
        {skills.map((skill: string, i: number) => {
          return <Tag key={`${company}-skill-${i}`} text={skill} />;
        })}
      </S.Tags>
    </S.Project>
  );
};

export default Project;

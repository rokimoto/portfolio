'use client';
// Components
import Background from './components/Background';
import Project from './components/Project';
// Icons
import LinkedIn from './icons/LinkedIn';
import Github from './icons/Github';
import Email from './icons/Email';
// Styles
import S from './styles/page.style';

export default function Home() {
  return (
    <S.Page>
      <Background />
      <S.Header>Hello</S.Header>
      <S.Bio>
        My name is Rachel Okimoto. I am a senior frontend engineer with 9+ years
        experience. I specialize in building design systems and pixel-perfect,
        engaging experiences.
      </S.Bio>
      <S.Section>
        <S.SectionTitle>Experience</S.SectionTitle>
        <S.Projects>
          <Project
            position="Senior frontend engineer / UX"
            company="Twisty"
            link="https://twisty.ai"
            skills={[
              'Next.js',
              'React',
              'TypeScript',
              'JavaScript',
              'Storybook',
              'Figma',
            ]}
          />
          <Project
            position="Senior frontend engineer"
            company="Bright"
            link="https://brightlive.com"
            skills={[
              'Next.js',
              'React',
              'TypeScript',
              'JavaScript',
              'Storybook',
              'Figma',
            ]}
          />
        </S.Projects>
      </S.Section>
      <S.Section>
        <S.SectionTitle>Projects</S.SectionTitle>
        <S.Projects>
          <Project
            company="Door"
            link="https://door-nyc.com"
            skills={['JavaScript', 'CSS', 'Shopify']}
          />
          <Project
            company="Jae Jung Portfolio"
            link="https://www.jae.world"
            skills={['Next.js', 'React', 'TypeScript']}
          />
          <Project
            company="A Slice of Machine Learning"
            link="https://sliceofml.withgoogle.com"
            skills={['Angular', 'SCSS']}
          />
          <Project
            company="Behr Color Discovery"
            link="https://colordiscovery.behr.com/welcome"
            skills={['React', 'CSS']}
          />
        </S.Projects>
      </S.Section>
      <S.Section>
        <S.SectionTitle>Socials</S.SectionTitle>
        <S.Socials>
          <S.Social
            href="https://www.linkedin.com/in/rachelokimoto/"
            target="_blank"
          >
            <LinkedIn size={32} />
          </S.Social>
          <S.Social href="https://github.com/rokimoto" target="_blank">
            <Github size={32} />
          </S.Social>
          <S.Social
            href="ma&#105;&#108;to&#58;&#37;7&#50;a&#99;&#104;%65l&#46;%&#54;F&#107;imot&#111;&#64;%6&#55;%6&#68;&#37;61&#105;%6C&#46;com"
            target="_blank"
          >
            <Email size={32} />
          </S.Social>
        </S.Socials>
      </S.Section>
    </S.Page>
  );
}

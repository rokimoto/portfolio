'use client';
import React from 'react';
import S from './style';

const Background = () => {
  return (
    <S.GradientBG>
      <S.NoiseBG viewBox="0 0 100vw 100vw" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilterBg">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            stitchTiles="stitch"
          />
        </filter>

        <rect
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
          filter="url(#noiseFilterBg)"
        />
      </S.NoiseBG>
      <S.SvgBlur xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </S.SvgBlur>
      <S.GradientsContainer>
        <S.G1 />
        <S.G2 />
        <S.G3 />
        <S.G4 />
        <S.G5 />
        <S.Interactive />
      </S.GradientsContainer>
    </S.GradientBG>
  );
};

export default Background;

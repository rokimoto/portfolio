import styled, { keyframes } from 'styled-components';

const colorBg1 = 'rgb(255,235,246)';
const colorBg2 = 'rgb(240,250,253)';
const color1 = '208, 195, 241';
const color2 = '233, 249, 229';
const color3 = '206, 238, 248';
const color4 = '255, 215, 238';
const color5 = '254, 241, 171';
const colorInteractive = '255, 164, 216';
const circleSize = '80%';
const blending = 'hard-light';

const moveInCircle = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const moveVertical = keyframes`
  0% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(-50%);
  }
`;

const moveHorizontal = keyframes`
  0% {
    transform: translateX(-50%) translateY(-10%);
  }
  50% {
    transform: translateX(50%) translateY(10%);
  }
  100% {
    transform: translateX(-50%) translateY(-10%);
  }
`;

const S = {
  GradientBG: styled.div`
    position: fixed;
    overflow: hidden;
    background: linear-gradient(40deg, ${colorBg1}, ${colorBg2});
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  `,
  NoiseBG: styled.svg`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    mix-blend-mode: soft-light;
    opacity: 0.3;
  `,
  SvgBlur: styled.svg`
    display: none;
  `,
  GradientsContainer: styled.div`
    filter: url(#goo) blur(40px);
    width: 100%;
    height: 100%;
  `,
  G1: styled.div`
    position: absolute;
    background: radial-gradient(
        circle at center,
        rgba(${color1}, 0.8) 0,
        rgba(${color1}, 0) 50%
      )
      no-repeat;
    mix-blend-mode: ${blending};

    width: ${circleSize};
    height: ${circleSize};
    top: calc(50% - ${circleSize} / 2);
    left: calc(50% - ${circleSize} / 2);

    transform-origin: center center;
    animation: ${moveVertical} 15s ease infinite;

    opacity: 1;
  `,
  G2: styled.div`
    position: absolute;
    background: radial-gradient(
        circle at center,
        rgba(${color2}, 0.8) 0,
        rgba(${color2}, 0) 50%
      )
      no-repeat;
    mix-blend-mode: ${blending};

    width: ${circleSize};
    height: ${circleSize};
    top: calc(50% - ${circleSize} / 2);
    left: calc(50% - ${circleSize} / 2);

    transform-origin: calc(50% - 400px);
    animation: ${moveInCircle} 10s reverse infinite;

    opacity: 1;
  `,
  G3: styled.div`
    position: absolute;
    background: radial-gradient(
        circle at center,
        rgba(${color3}, 0.8) 0,
        rgba(${color3}, 0) 50%
      )
      no-repeat;
    mix-blend-mode: ${blending};

    width: ${circleSize};
    height: ${circleSize};
    top: calc(50% - ${circleSize} / 2 + 200px);
    left: calc(50% - ${circleSize} / 2 - 500px);

    transform-origin: calc(50% + 400px);
    animation: ${moveInCircle} 20s linear infinite;

    opacity: 1;
  `,
  G4: styled.div`
    position: absolute;
    background: radial-gradient(
        circle at center,
        rgba(${color4}, 0.8) 0,
        rgba(${color4}, 0) 50%
      )
      no-repeat;
    mix-blend-mode: ${blending};

    width: ${circleSize};
    height: ${circleSize};
    top: calc(50% - ${circleSize} / 2);
    left: calc(50% - ${circleSize} / 2);

    transform-origin: calc(50% - 200px);
    animation: ${moveHorizontal} 20s ease infinite;

    opacity: 0.7;
  `,
  G5: styled.div`
    position: absolute;
    background: radial-gradient(
        circle at center,
        rgba(${color5}, 0.8) 0,
        rgba(${color5}, 0) 50%
      )
      no-repeat;
    mix-blend-mode: ${blending};

    width: calc(${circleSize} * 2);
    height: calc(${circleSize} * 2);
    top: calc(50% - ${circleSize});
    left: calc(50% - ${circleSize});

    transform-origin: calc(50% - 800px) calc(50% + 200px);
    animation: ${moveInCircle} 10s ease infinite;

    opacity: 1;
  `,
  Interactive: styled.div`
    position: absolute;
    background: radial-gradient(
        circle at center,
        rgba(${colorInteractive}, 0.8) 0,
        rgba(${colorInteractive}, 0) 50%
      )
      no-repeat;
    mix-blend-mode: ${blending};

    width: 100%;
    height: 100%;
    top: -50%;
    left: -50%;

    opacity: 0.7;
  `,
};

export default S;

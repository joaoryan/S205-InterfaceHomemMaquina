import React from 'react';
import styled, { keyframes } from 'styled-components';

const move = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgb(10, 12, 33);
`;

const Shape = styled.div<{ size: number; top: string; left: string; duration: string }>`
  position: absolute;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  border-radius: 50%;
  opacity: 0.8;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  animation: ${move} ${(props) => props.duration} ease-in-out infinite;
  mix-blend-mode: overlay;
`;

const Background: React.FC = () => {
    return (
        <BackgroundWrapper>
            <Shape size={300} top="10%" left="20%" duration="5s" />
            <Shape size={200} top="40%" left="60%" duration="7s" />
            <Shape size={400} top="70%" left="30%" duration="10s" />
            <Shape size={150} top="80%" left="80%" duration="12s" />
        </BackgroundWrapper>
    );
};

export default Background;

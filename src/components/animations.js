import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(.25);
    opacity: 0;
  }
`;

export const FadeAnimation = styled.div`
  display: inline-block;
  visibility: ${props => (props.out ? 'hidden' : 'visible')};
  animation: ${props => (props.out ? fadeOut : fadeIn)} 1s linear;
  transition: visibility 1s linear;
`;

import { keyframes, css } from "styled-components";

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`;

export const fadeIn = ({ time = "1s", type = "ease" } = {}) => {
  return (
    css`animation: ${fadeInKeyframes} ${time} ${type};`
  );
};
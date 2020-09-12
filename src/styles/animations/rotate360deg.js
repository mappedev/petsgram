import { keyframes, css } from 'styled-components';

const rotateKeyframe = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const rotate360deg = ({
  time = '1.2s',
  type = 'linear',
  iteration = 'infinite',
} = {}) =>
  css`
    animation: ${rotateKeyframe} ${time} ${type} ${iteration};
  `;

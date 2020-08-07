import { css, keyframes } from 'styled-components';

const skeletonLoadingKeyframe = keyframes`
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: -135% 0%;
  }
`;

export const skeletonLoading = (duration = '1.2s') =>
  css`
    background-image: linear-gradient(
      -90deg,
      transparent 0%,
      #e8e8e8 50%,
      transparent 100%
    );
    background-size: 400%;
    animation: ${skeletonLoadingKeyframe} ${duration} linear infinite;
  `;

import styled from 'styled-components';

import { skeletonLoading } from '../../styles/animations/skeletonLoading';

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SkeletonImage = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin-bottom: 1px;
  ${skeletonLoading()}
`;

export const SkeletonEmoji = styled.div`
  width: 20px;
  height: 18px;
  ${skeletonLoading()}
`;

import styled from 'styled-components';

import { skeletonLoading } from '../../styles/animations/skeletonLoading';

export const SkeletonWrapper = styled.div`
  display: flex;
`;

export const SkeletonContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8px;
`;

export const SkeletonImage = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin-bottom: 1px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  ${skeletonLoading()}
`;

export const SkeletonEmoji = styled.div`
  width: 20px;
  height: 18px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  ${skeletonLoading()};
`;

import styled from 'styled-components';

import { skeletonLoading } from '../../styles/animations/skeletonLoading';

export const SkeletonTitle = styled.div`
  margin: 0 auto;
  width: 100px;
  height: 20px;
  border-radius: 3px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  ${skeletonLoading()};
`;

export const SkeletonWrapper = styled.div`
  padding-top: 32px;
  display: flex;
  justify-content: space-around;
`;

export const SkeletonBox = styled.div`
  width: 160px;
  height: 124px;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  ${skeletonLoading()};
`;

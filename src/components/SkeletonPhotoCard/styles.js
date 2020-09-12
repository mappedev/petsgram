import styled from 'styled-components';

import { skeletonLoading } from '../../styles/animations/skeletonLoading';

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SkeletonContent = styled.div`
  margin-top: 25px;
  padding-bottom: 10px;
  height: 300px;
  width: 100%;
`;

export const SkeletonImage = styled.div`
  border-radius: 10px;
  height: 281.25px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  ${skeletonLoading()}
`;

export const SkeletonButton = styled.div`
  margin: 10px 0 0 5px;
  border-radius: 4px;
  width: 47.79px;
  height: 24px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  ${skeletonLoading()}
`;

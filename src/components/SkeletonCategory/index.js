import React from 'react';

import { SkeletonWrapper, SkeletonImage, SkeletonEmoji } from './styles';

export const SkeletonCategory = () => (
  <SkeletonWrapper>
    <SkeletonImage />
    <SkeletonEmoji />
  </SkeletonWrapper>
);

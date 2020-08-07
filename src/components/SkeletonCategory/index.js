import React from 'react';

import { SkeletonWrapper, SkeletonImage, SkeletonEmoji } from './styles';

export default function SkeletonCategory() {
  return (
    <SkeletonWrapper>
      <SkeletonImage />
      <SkeletonEmoji />
    </SkeletonWrapper>
  );
}

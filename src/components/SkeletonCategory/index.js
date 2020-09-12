import React from 'react';

import {
  SkeletonWrapper,
  SkeletonContent,
  SkeletonImage,
  SkeletonEmoji,
} from './styles';

export default function SkeletonCategory({ quantity = 1 }) {
  const numElements = [];

  for (let i = 0; i < quantity; i++) {
    numElements.push(i);
  }

  return (
    <SkeletonWrapper>
      {numElements.map((element) => (
        <SkeletonContent key={element}>
          <SkeletonImage />
          <SkeletonEmoji />
        </SkeletonContent>
      ))}
    </SkeletonWrapper>
  );
}

import React from 'react';

import { SkeletonTitle, SkeletonWrapper, SkeletonBox } from './styles';

export default function SkeletonFavs({ quantity }) {
  let numElements = [];

  for (let i = 0; i < quantity; i++) {
    numElements.push(i);
  }

  return (
    <>
      <SkeletonTitle />
      <SkeletonWrapper>
        {numElements.map((element) => (
          <SkeletonBox key={element} />
        ))}
      </SkeletonWrapper>
    </>
  );
}

import React from 'react';

import { Loader } from './styles.js';

export default function Loading({
  size = '64',
  color = 'white',
  time = '1.2s',
}) {
  const containerSize = (size * 80) / 64;
  const marginSize = (size * 8) / 64;
  const borderSize = (size * 6) / 64;

  return (
    <Loader
      containerSize={containerSize}
      loaderSize={size}
      marginSize={marginSize}
      borderSize={borderSize}
      color={color}
      time={time}
    />
  );
}

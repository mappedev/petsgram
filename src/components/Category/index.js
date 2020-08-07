import React from 'react';

import { Anchor, Img } from './styles';

export default function Category({ path, cover, name, emoji = '?' }) {
  return (
    <Anchor href={path}>
      <Img src={cover} alt={name} />
      {emoji}
    </Anchor>
  );
}

import React from 'react';

import { Anchor, Img } from './styles';

export const Category = ({ path, cover, name, emoji = '?' }) => (
  <Anchor href={path}>
    <Img src={cover} alt={name} />
    {emoji}
  </Anchor>
);

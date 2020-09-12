import React from 'react';

import { Link, Img } from './styles';

export default function Category({ path, cover, name, emoji = '?' }) {
  return (
    <Link to={path}>
      <Img src={cover} alt={name} />
      {emoji}
    </Link>
  );
}

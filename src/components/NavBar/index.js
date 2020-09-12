import React from 'react';
import { MdHome, MdFavorite, MdPerson } from 'react-icons/md';

import { Nav, Ul, Li, Link } from './styles';

const SIZE = '32px';

export default function NavBar() {
  return (
    <Nav>
      <Ul>
        <Li>
          <Link to='/'>
            <MdHome size={SIZE} />
          </Link>
        </Li>
        <Li>
          <Link to='/favs'>
            <MdFavorite size={SIZE} />
          </Link>
        </Li>
        <Li>
          <Link to='/user'>
            <MdPerson size={SIZE} />
          </Link>
        </Li>
      </Ul>
    </Nav>
  );
}

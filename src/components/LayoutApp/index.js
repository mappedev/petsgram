import React from 'react';

import Logo from '../Logo';
import NavBar from '../NavBar';

import { GlobalStyles } from '../../styles/GlobalStyles';

export default function LayoutApp() {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <NavBar />
    </>
  );
}

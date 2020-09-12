import React from 'react';

import RegisterUser from '../components/RegisterUser';
import LoginUser from '../components/LoginUser';

import { useContextValue } from '../Context';

export default function NotRegisteredUser() {
  const { isAuth, activateAuth } = useContextValue();

  return (
    !isAuth && (
      <>
        <RegisterUser activateAuth={activateAuth} />
        <LoginUser activateAuth={activateAuth} />
      </>
    )
  );
}

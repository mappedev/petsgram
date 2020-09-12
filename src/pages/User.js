import React from 'react';

import UserData from '../components/UserData';

import { useContextValue } from '../Context';

export default function User() {
  const { removeAuth } = useContextValue();

  return (
    <>
      <UserData onClick={removeAuth} />
    </>
  );
}

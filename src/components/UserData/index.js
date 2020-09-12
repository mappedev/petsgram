import React from 'react';

import SubmitButton from '../SubmitButton';

import { Title } from './styles.js';

export default function UserData({ onClick }) {
  return (
    <>
      <Title>Usuario</Title>
      <SubmitButton onClick={onClick}>Cerrar sesión</SubmitButton>
    </>
  );
}

import React from 'react';
import { gql, useMutation } from '@apollo/client';

import UserForm from '../UserForm';

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export default function RegisterUser({ activateAuth }) {
  const [register, { loading, error }] = useMutation(REGISTER);

  const handleSubmit = ({ email, password }) => {
    const input = { email, password };

    register({ variables: { input } }).then(({ data }) => {
      const { signup } = data;
      activateAuth(signup);
    });
  };

  const errorMessage =
    error && 'Ha ocurrido un error. Es posible que el usuario ya exista.';

  return (
    <>
      <UserForm
        onSubmit={handleSubmit}
        title='Registrarse'
        error={errorMessage}
        loading={loading}
      />
    </>
  );
}

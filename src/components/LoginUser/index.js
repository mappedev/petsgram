import React from 'react';
import { gql, useMutation } from '@apollo/client';

import UserForm from '../UserForm';

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export default function LoginUser({ activateAuth }) {
  const [login, { loading, error }] = useMutation(LOGIN);

  const handleSubmit = ({ email, password }) => {
    const input = { email, password };

    login({ variables: { input } }).then(({ data }) => {
      const { login } = data;
      activateAuth(login);
    });
  };

  const errorMessage =
    error &&
    'Verfique su usario y contraseña. Es posible que el usuario no exista.';

  return (
    <>
      <UserForm
        onSubmit={handleSubmit}
        title='Iniciar Sesión'
        error={errorMessage}
        loading={loading}
      />
    </>
  );
}

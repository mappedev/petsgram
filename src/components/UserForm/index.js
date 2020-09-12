import React from 'react';

import SubmitButton from '../SubmitButton';
import Loading from '../Loading';

import useInputValue from '../../hooks/useInputValue';

import { Form, Input, Title, Error, ErrorIcon } from './styles';

export default function UserForm({ onSubmit, title, error, loading }) {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Form disabled={loading} onSubmit={handleSubmit}>
        {error && (
          <Error>
            <ErrorIcon />
            {error}
          </Error>
        )}
        <Title>{title}</Title>
        <Input
          type='email'
          // id='email'
          placeholder='Email'
          required
          disabled={loading}
          // value={email.value}
          // onChange={email.onChange}
          {...email}
        />
        <Input
          type='password'
          // id='password'
          placeholder='Password'
          required
          disabled={loading}
          // value={password.value}
          // onChange={password.onChange}
          {...password}
        />
        <SubmitButton disabled={loading}>
          {loading ? <Loading size={16} /> : title}
        </SubmitButton>
      </Form>
    </>
  );
}

// Debido a que las propiedades del objeto email y password tienen el mismo nombre que los atributos que necesita el input (value, onChange), se pasa un rest operator de dicho objeto ...email y ...paswword.

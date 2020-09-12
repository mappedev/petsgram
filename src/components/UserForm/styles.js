import styled from 'styled-components';
import { MdHighlightOff } from 'react-icons/md';

import { fadeIn } from '../../styles/animations/fadeIn';

export const Form = styled.form`
  padding: 16px 0;
  width: 100%;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  font-size: 13.5px;
  &[disabled] {
    opacity: 0.3;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  padding: 8px 0;
`;

export const Error = styled.span`
  background: #fdbcb4;
  border: 1.5px solid #e0a0a0;
  border-radius: 3px;
  color: red;
  min-height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  font-size: 13.5px;
  font-weight: 600;
  padding: 8px 0;
  ${fadeIn({ time: '0.2s' })}
`;

export const ErrorIcon = styled(MdHighlightOff)`
  color: red;
  font-size: 1em;
  margin-right: 3px;
`;

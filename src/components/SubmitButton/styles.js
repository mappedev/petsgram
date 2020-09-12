import styled from 'styled-components';

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  font-size: 13.5px;
  font-weight: 600;
  &[disabled] {
    opacity: 0.3;
  }
`;

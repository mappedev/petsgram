import styled from 'styled-components';

import { rotate360deg } from '../../styles/animations/rotate360deg';

export const Loader = styled.div`
  display: inline-block;
  width: ${(props) => props.containerSize}px;
  height: ${(props) => props.containerSize}px;
  &:after {
    content: '';
    display: block;
    width: ${(props) => props.loaderSize}px;
    height: ${(props) => props.loaderSize}px;
    margin: ${(props) => props.marginSize}px;
    border-radius: 50%;
    border: ${(props) => props.borderSize}px solid ${(props) => props.color};
    border-color: ${(props) => props.color} transparent
      ${(props) => props.color} transparent;
    ${rotate360deg()};
  }
`;

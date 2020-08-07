import styled, { css } from 'styled-components';

import { fadeIn } from '../../styles/animations/fadeIn';

export const List = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  ${(props) =>
    props.fixed &&
    css`
      ${fadeIn({ time: '0.5s' })}
      background-color: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      max-width: 555px;
      padding: 5px;
      position: fixed;
      top: -26px;
      transform: scale(0.5);
      z-index: 1;
    `}
`;

export const Item = styled.li`
  padding: 0 8px;
`;

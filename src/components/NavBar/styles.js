import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

import { fadeIn } from '../../styles/animations/fadeIn';

export const Nav = styled.nav`
  background-color: #fcfcfc;
  height: 50px;
  max-width: 500px;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 1px #e0e0e0 inset;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1000;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: inherit;
`;

export const Li = styled.li`
  height: 100%;
  width: 100%;
`;

export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: #888;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #000;
  }
  &:active {
    color: rgba(0, 0, 0, 0.75);
  }
  &[aria-current] {
    color: #000;
    &:after {
      content: '•';
      position: absolute;
      bottom: 0;
      color: #000;
      font-size: 24px;
      line-height: 14px;
      ${fadeIn({ time: '0.5s' })};
    }
  }
`;

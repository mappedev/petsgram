import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 32px;
  gap: 5px;
`;

export const Link = styled(LinkRouter)`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  overflow: hidden;
  max-height: 160px;
  max-width: 160px;
  height: 100%;
  width: 100%;
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

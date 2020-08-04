import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.li`
  padding: 0 8px;
`;

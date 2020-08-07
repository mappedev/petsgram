import styled, { css } from 'styled-components';

export const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
  ${(props) =>
    props.loading &&
    css`
      background-color: black;
    `}
`;

export const Img = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  width: 75px;
  height: 75px;
  margin-bottom: 1px;
`;

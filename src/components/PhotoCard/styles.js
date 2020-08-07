import styled from 'styled-components';

import { fadeIn } from '../../styles/animations/fadeIn';

export const Article = styled.article`
  background-color: white;
  box-shadow: 0 40px 0px 0px rgba(0, 0, 0, 0.07);
  margin: 25px 0;
  border-radius: 10px;
  padding-bottom: 10px;
`;

export const ImgWrapper = styled.div`
  border-radius: 10px;
  height: 0;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  position: relative;
`;

export const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
`;

export const Button = styled.button`
  margin: 10px 0 0 5px;
  padding: 3px 10px;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid #e9f2f9;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  & svg {
    margin-right: 4px;
  }
`;

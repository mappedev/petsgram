import styled from 'styled-components';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

import { fadeIn } from '../../styles/animations/fadeIn';

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

export const LikeIcon = styled(MdFavorite)`
  ${fadeIn({ time: '0.2s', type: 'ease-in' })}
`;

export const DislikeIcon = styled(MdFavoriteBorder)`
  ${fadeIn({ time: '0.2s', type: 'ease-in' })}
`;

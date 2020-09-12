import React from 'react';
import { useMutation } from '@apollo/client';
import PropTypes from 'prop-types';

import { Button, LikeIcon, DislikeIcon } from './styles.js';

const SIZE = '14px';
const COLOR = 'skyblue';

export default function FavButton({ query, id, likes, liked }) {
  const [toggleLike] = useMutation(query);

  const Icon = liked ? LikeIcon : DislikeIcon;

  const handleFavClick = () => toggleLike({ variables: { input: { id } } });

  return (
    <Button onClick={handleFavClick}>
      <Icon size={SIZE} color={COLOR} />
      <span>{likes}</span>
    </Button>
  );
}

FavButton.propTypes = {
  query: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
};

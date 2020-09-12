import React from 'react';
import { gql } from '@apollo/client';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import FavButton from '../FavButton';

import useNearScreen from '../../hooks/useNearScreen';
import { Article, ImgWrapper, Img } from './styles';

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export default function PhotoCard({ id, likes = 0, src, liked }) {
  const [showPhoto, element] = useNearScreen();

  return (
    <Article ref={element}>
      {showPhoto && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='pet' />
            </ImgWrapper>
          </Link>

          <FavButton query={LIKE_PHOTO} id={id} likes={likes} liked={liked} />
        </>
      )}
    </Article>
  );
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: (props, propName, componentName) => {
    const propValue = props[propName];

    if (propValue === undefined) {
      return new Error(
        `In ${componentName}, your ${propName} value must be defined`
      );
    }

    if (propValue < 0) {
      return new Error(
        `In ${componentName}, your ${propName} value must be greater than 0`
      );
    }
  },
};

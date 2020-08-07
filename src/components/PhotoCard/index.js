import React from 'react';
import { MdFavorite } from 'react-icons/md';

import { Article, ImgWrapper, Img, Button } from './styles';

export default function PhotoCard({ id, likes = 0, src }) {
  return (
    <Article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} alt='pet' />
        </ImgWrapper>
      </a>

      <Button>
        <MdFavorite size='14px' />
        <span>{likes}</span>
      </Button>
    </Article>
  );
}

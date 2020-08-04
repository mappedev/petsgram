import React from "react";

import { Article, ImgWrapper, Img, Button } from "./styles";
import { MdFavorite } from "react-icons/md";

export const PhotoCard = ({ id, likes = 0, src }) => {
  return (
    <Article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} alt="pet" />
        </ImgWrapper>
      </a>

      <Button>
        <MdFavorite size="14px" /> {likes}
      </Button>
    </Article>
  );
};

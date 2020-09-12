import React from 'react';
import { gql, useQuery } from '@apollo/client';

import PhotoCard from '../PhotoCard';
import SkeletonPhotoCard from '../SkeletonPhotoCard';

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export default function DetailPhoto({ id }) {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: { id },
  });

  if (loading) return <SkeletonPhotoCard />;
  if (error) return <p>Lo siento, ha ocurrido un error.</p>;

  return (
    <PhotoCard
      id={data.photo.id}
      likes={data.photo.likes}
      src={data.photo.src}
      liked={data.photo.liked}
    />
  );
}

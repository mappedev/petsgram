import React from 'react';

import PhotoCard from '../PhotoCard';
import SkeletonPhotoCard from '../SkeletonPhotoCard/index.js';

import { gql, useQuery } from '@apollo/client';

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export default function ListOfPhotoCards({ categoryId }) {
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId },
  });

  if (loading) return <SkeletonPhotoCard quantity={3} />;
  if (error) return <p>Lo siento, ha ocurrido un error.</p>;

  return (
    <ul>
      {data.photos.map((photo) => (
        <li key={photo.id}>
          <PhotoCard
            id={photo.id}
            likes={photo.likes}
            src={photo.src}
            liked={photo.liked}
          />
        </li>
      ))}
    </ul>
  );
}

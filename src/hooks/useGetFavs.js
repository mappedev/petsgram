import { gql, useQuery } from '@apollo/client';

export default function useGetFavs() {
  const GET_FAVS = gql`
    query getFavs {
      favs {
        id
        categoryId
        src
        likes
        userId
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_FAVS, {
    fetchPolicy: 'cache-and-network',
  });

  return { loading, error, data };
}

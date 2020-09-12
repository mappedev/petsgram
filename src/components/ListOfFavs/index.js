import React from 'react';
import PropTypes from 'prop-types';

import SkeletonFavs from '../SkeletonFavs';

import { Grid, Image, Link } from './styles';

export default function ListOfFavs({ loading, error, favs }) {
  if (loading) return <SkeletonFavs quantity={3} />;
  if (error) return <p>Lo siento, ha ocurrido un error.</p>;

  return (
    <>
      <Grid>
        {favs.map((fav) => (
          <Link key={fav.id} to={`/detail/${fav.id}`}>
            <Image key={fav.id} src={fav.src} />
          </Link>
        ))}
      </Grid>
    </>
  );
}

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ),
};

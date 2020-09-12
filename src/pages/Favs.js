import React from 'react';

import LayoutPage from '../components/LayoutPage';
import ListOfFavs from '../components/ListOfFavs';

import useGetFavs from '../hooks/useGetFavs';

export default function Favs() {
  const { loading, error, data } = useGetFavs();

  const favs = data ? data.favs : [];

  return (
    <LayoutPage
      title='Tus favoritos'
      subtitle='Aquí podrás encontrar tus favoritos'
      renderTitles
    >
      <ListOfFavs loading={loading} error={error} favs={favs} />
    </LayoutPage>
  );
}

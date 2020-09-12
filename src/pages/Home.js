import React from 'react';

import LayoutPage from '../components/LayoutPage';
import ListOfCategories from '../components/ListOfCategories';
import ListOfPhotoCards from '../components/ListOfPhotoCards';

function HomePage({ categoryId }) {
  return (
    <>
      <LayoutPage
        title='Tu app de mascotas'
        subtitle='Con Petsgram puedes encontrar fotos de animales domésticos'
      >
        <ListOfCategories />
        <ListOfPhotoCards categoryId={categoryId} />
      </LayoutPage>
    </>
  );
}

const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId;
});

export default Home;

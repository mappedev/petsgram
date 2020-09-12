import React from 'react';

import Category from '../Category';
import SkeletonCategory from '../SkeletonCategory';

import useFetch from '../../hooks/useFetch';
import useShowFixed from '../../hooks/useShowFixed';
import { List, Item } from './styles';

function ListOfCategoriesComponent() {
  const [categories, loading] = useFetch(
    'https://petsgram-api-mappedev.vercel.app/categories'
  );
  const showFixed = useShowFixed();

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? (
        <Item>
          <SkeletonCategory quantity={6} />
        </Item>
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category
              // path={category.path}
              path={`/pet/${category.id}`}
              cover={category.cover}
              name={category.name}
              emoji={category.emoji}
            />
          </Item>
        ))
      )}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
}

const ListOfCategories = React.memo(ListOfCategoriesComponent);
// No quiero que te vuelvas a renderizar si las props que recibes no son diferentes.

export default ListOfCategories;

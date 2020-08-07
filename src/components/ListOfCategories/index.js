import React, { useEffect, useState } from 'react';

import Category from '../Category';
import SkeletonCategory from '../SkeletonCategory';

import { List, Item } from './styles';

// Hooks:
function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        'https://petsgram-api-mappedev.vercel.app/categories'
      );
      const data = await response.json();

      setLoading(false);
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return { categories, loading };
}

function useShowFixed() {
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      window.scrollY > 180 ? setShowFixed(true) : setShowFixed(false);

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  return showFixed;
}

// Component:
export default function ListOfCategories() {
  const { categories, loading } = useCategoriesData();
  const showFixed = useShowFixed();

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => (
        <Item key={category.id}>
          {loading ? (
            <SkeletonCategory />
          ) : (
            <Category
              path={category.path}
              cover={category.cover}
              name={category.name}
              emoji={category.emoji}
            />
          )}
        </Item>
      ))}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
}

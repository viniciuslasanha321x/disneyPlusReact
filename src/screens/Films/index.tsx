// Modules
import React, { useState, useEffect } from 'react';
import FilmDropdownCategoriesPage from '../../components/FilmDropdownCategoriesPage';

import Header from '../../components/Header';
import { api } from '../../services/api';

const Films = () => {
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    (async function loadCategories() {
      const { data } = await api.get<string[]>('/categorieseries');

      setCategories(data);
    })();
  }, []);

  return (
    <>
      <Header />
      <FilmDropdownCategoriesPage title="Filmes" categories={categories} />
    </>
  );
};

export default Films;

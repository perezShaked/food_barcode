import { useState, useEffect } from 'react';
import { getCategoriesAPI } from '../services';

export function useGetCategories() {
  const [categories, setCategories] = useState([]);
  const [categoriesError, setCategoriesError] = useState(null);

  useEffect(() => {
    getCategoriesAPI()
      .then((data) => setCategories(data))
      .catch((err) => setCategoriesError(err));
  }, []);

  return { categories, categoriesError };
}

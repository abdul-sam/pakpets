import { useEffect, useState } from "react";
import { listCategories } from "../services/category";
import { PopularCategories } from "../constants";

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    // TODO: Fetch categories from the API
    // listCategories()
    //   .then(response => {
    //     setCategories(response.data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

    setCategories(PopularCategories);
  };

  return categories;
}

export default useCategories;
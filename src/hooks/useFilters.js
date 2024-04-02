import { useEffect, useState } from "react";
import { listPopularSearches } from "../services/filter";
import { PopularSearches } from "../constants";

const useFilters = () => {
  const [popularSearches, setPopularSearches] = useState([]);

    useEffect(() => {
      getData();
    }, []);

    const getData = () => {
          // TODO: Fetch categories from the API
      // listPopularSearches()
      //   .then(response => {
      //     setPopularSearches(response.data);
      //   })
      //   .catch(error => {
      //     console.error(error);
      //   });

      setPopularSearches(PopularSearches);
    };

    return popularSearches;
  }

  export default useFilters;
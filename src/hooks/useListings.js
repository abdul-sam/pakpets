import { useEffect, useState } from "react";
import { listings } from "../services/listing";
import { PopularListings } from "../constants/listings";

const useListings = () => {
  const [popularListings, setPopularListings] = useState([]);
  const [featuredListings, setFeaturedListings] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
        // TODO: Fetch categories from the API
    // listings()
    //   .then(response => {
    //     setPopularListings(response.data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

    setPopularListings(PopularListings);
    setFeaturedListings(PopularListings)
  };

  return { popularListings, featuredListings };
}

export default useListings;
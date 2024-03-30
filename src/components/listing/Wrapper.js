import React from "react";
import useListings from "../../hooks/useListings";
import Listings from "./Listings";

const Wrapper = () => {

  const { popularListings, featuredListings } = useListings();

  return(
    <>
      <section className="bg-gray-50 my-20">
        { popularListings && popularListings.map(listing => <Listings listings={listing}/>)}
      </section>
      <section className="mb-20">
        { featuredListings && featuredListings.map(listing => <Listings listings={listing}/>)}
      </section>
    </>
  )

}

export default Wrapper;
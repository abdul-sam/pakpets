import React from "react";
import useListings from "../../hooks/useListings";
import Listings from "./Listings";

const ListingWrapper = () => {

  const { popularListings, featuredListings } = useListings();

  return(
    <>
      <Listings
        title="Popular Listings"
        link="/popular-listings"
        linkText="View All"
        listings={popularListings}
        background="bg-gray-50"
        carousel={true}
      />

      <Listings
        title="Featured Listings"
        link="/featured-listings"
        linkText="View All"
        listings={featuredListings}
        background="bg-white"
        carousel={false}
      />
    </>
  )

}

export default ListingWrapper;
import React from "react";
import { Typography } from "@material-tailwind/react";
import useListings from "../../hooks/useListings";
import Listing from "./Listing";
import { Styles } from "../../styles";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const Listings = () => {

  const { popularListings, featuredListings } = useListings();

  return(
    <>
      <section className="pt-28 pb-10 sm:pb-20 bg-gray-50">
        <div className={Styles.container}>
          <div class="w-full mb-3">
            <Typography
              variant="h3"
              className="inline-flex text-gray-600"
            >
              Popular Listings

            </Typography>
            <Typography
              as="a"
              href="/listings"
              className="flex font-bold mb-5 text-gray-600 float-right mt-2"
            >
              View All
              <ArrowLongRightIcon className="h-5 w-5 ml-2 mt-1"/>
            </Typography>
          </div>
          <div className="justify-center flex-1 px-0 mx-auto">
            <section className={`bg-gray-50 my-20 ${Styles.listing.wrapper}`}>
              { popularListings && popularListings.map((listing, key) => <Listing key={key} listing={listing}/>)}
            </section>
          </div>
        </div>

      </section>
      {/* <section className="mb-20">
        { featuredListings && featuredListings.map((listing, key) => <Listing key={key} listing={listing}/>)}
      </section> */}
    </>
  )

}

export default Listings;
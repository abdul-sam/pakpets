import React from "react";
import { Typography } from "@material-tailwind/react";
import Listing from "./Listing";
import { styles } from "../../styles";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const Listings = ({ title, link, linkText, listings, background }) => {

  return(
    <>
      <section className={`pt-28 pb-10 sm:pb-20 ${background}`}>
        <div className={styles.container}>
          <div className="w-full mb-3">
            <Typography
              variant="h3"
              className="inline-flex text-gray-600"
            >
              { title }

            </Typography>
            <Typography
              as="a"
              href={link}
              className="flex font-bold mb-5 text-gray-600 float-right mt-2"
            >
              { linkText }
              <ArrowLongRightIcon className="h-5 w-5 ml-2 mt-1"/>
            </Typography>
          </div>
          <div className="justify-center flex-1 px-0 mx-auto">
            <section className={`bg-gray-50 my-20 ${styles.listing.wrapper}`}>
              { listings && listings.map((listing, key) => <Listing key={key} listing={listing}/>)}
            </section>
          </div>
        </div>
      </section>
    </>
  )

}

export default Listings;
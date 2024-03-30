import React from "react";
import { MapPinIcon, HeartIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import { styles, theme } from "../../styles";

const Listing = ({ listing }) => {
  return(
    <div className={`relative w-full lg:mb-0 bg-white hover:shadow-md rounded-b-2xl border border-${theme.color}-50`}>
      <Typography
          as="a"
          href={`/listing/${listing.id}`}
        >
        <img src={listing.image_url} className="w-full h-48 mb-5"/>
      </Typography>
      <HeartIcon className="absolute top-3 right-3 w-6 h-6"/>
      { listing.popular && <Typography
        as="span"
        className={`absolute top-0 left-0 text-${theme.color}-800 bg-${theme.color}-50 p-2 text-xs font-semibold rounded-ee-2xl`}
      >
        Popular
      </Typography>}
      { listing.featured && <Typography
        as="span"
        className={`absolute ${listing.popular ? 'top-10 left-0' : 'top-0 left-0'} text-red-600 bg-red-50 p-2 text-xs font-semibold rounded-ee-2xl`}
      >
        Featured
      </Typography>}
      {/* <img src="./assets/images/aeroplane.png" className="absolute top-[42%] right-0 w-20 md:w-10 lg:w-10 xl:w-20 h-20 mr-5 md:mr-10 lg:mr-10 xl:mr-10 bg-[#f27522] p-3 mb-10"/> */}
      <div className="p-3">
        <Typography
          as="a"
          href={`/listing/${listing.id}`}
          className="text-lg font-semibold mb-1 hover:text-[#f27522] text-center truncate" 
        >
          {listing.title}

        </Typography>
        <p className="text-gray-400 px-3 flex text-xs justify-center mb-5"><MapPinIcon className="w-3 h-3 mt-0.5 mr-1"/> {listing.address}</p>
        <div className="flex justify-center items-center">
          <Typography
            as="span"
            className={`${styles.pill.default} me-2`}
          >
            {listing.category}
          </Typography>
          <Typography
            as="span"
            className={`${styles.pill.default} me-2`}
          >
            {listing.age}
          </Typography>
          <Typography
            as="span"
            className={`${styles.pill.default}`}
          >
            {listing.gender}
          </Typography>
        </div>
        <Typography
          as="span"
          className={`p-2 text-center bg-${theme.color}-50 text-${theme.color}-800 font-semibold rounded-full mt-5 text-2xl`}
        >
          Rs. {listing.price}
        </Typography>
      </div>
    </div>
  )
}

export default Listing;
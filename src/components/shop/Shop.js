import React from "react";
import { MapPinIcon, HeartIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import { styles, theme } from "../../styles/styles";

const Shop = ({ shop }) => {
  return(
    <div className={`w-full lg:mb-0 bg-white hover:shadow-md rounded-2xl border border-${theme.color}-50`}>
      <Typography
          as="span"
          className="text-end justify-end flex"
        >
        <ShieldCheckIcon className="w-6 h-6 m-5 text-green-600"/>
      </Typography>
        <img src={shop.image_url} className="w-16 h-16 mb-5 rounded-full mx-auto"/>
      { shop.verified && <Typography
        as="span"
        className={`text-${theme.color}-800 bg-${theme.color}-50 ${styles.tag.default}`}
      >
        Popular
      </Typography>}
      {/* <img src="./assets/images/aeroplane.png" className="absolute top-[42%] right-0 w-20 md:w-10 lg:w-10 xl:w-20 h-20 mr-5 md:mr-10 lg:mr-10 xl:mr-10 bg-[#f27522] p-3 mb-10"/> */}
      <div className="p-3">
        <Typography
          as="a"
          href={`/shop/${shop.id}`}
          className={`text-lg font-semibold mb-1 hover:text-${theme.color}-700 text-center truncate`} 
        >
          {shop.name}

        </Typography>
        <p className="text-gray-400 px-3 flex text-xs justify-center mb-5"><MapPinIcon className="w-3 h-3 mt-0.5 mr-1"/> {shop.address}</p>
        <div className="flex justify-center items-center">
          <Typography
            as="span"
            className={`${styles.pill.default} me-2`}
          >
            {shop.working_since}
          </Typography>
          <Typography
            as="span"
            className={`${styles.pill.default} me-2`}
          >
            {shop.available_listings}   listings
          </Typography>
        </div>
        <div className="flex justify-center items-center">
          <Typography
            as="a"
            href={`/shop/${shop.id}/follow`}
            className={`p-2 px-5 text-center bg-green-50 text-green-800 font-semibold rounded-xl mt-5 mb-3 me-5`}
          >
            Follow
          </Typography>
          <Typography
            as="a"
            href={`/shop/${shop.id}`}
            className={`p-2 px-5 text-center bg-${theme.color}-50 text-${theme.color}-800 font-semibold rounded-xl mt-5 text-md mb-3`}
          >
            Visit Shop
          </Typography>

        </div>
      </div>
    </div>
  )
}

export default Shop;
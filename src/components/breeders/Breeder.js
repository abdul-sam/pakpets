import React from "react";
import { MapPinIcon, ShieldCheckIcon, StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import { styles, theme } from "../../styles/styles";
import Rating from "react-rating";

const Breeder = ({ breeder }) => {
  return(
    <div className={`w-full lg:mb-0 bg-white hover:shadow-md rounded-2xl border border-${theme.color}-50`}>
      {
        breeder.verified &&
        <Typography
            as="span"
            className="text-end justify-end flex"
          >
          <ShieldCheckIcon className={`w-6 h-6 m-5 text-${theme.color}-600`}/>
        </Typography>
      }
      <img src={breeder.profile_image} className={`w-16 h-16 mb-5 rounded-full mx-auto ${ !breeder.verified ? 'mt-16' : ''}`}/>
      {/* <div className="flex justify-center items-center"> */}
        {/* <Typography
          as="span"
          className={`${styles.pill.default} me-2`}
        >
          {breeder.member_since}
        </Typography> */}
        {/* <Typography
          as="span"
          className={`${styles.pill.default} me-2`}
        >
          {breeder.available_listings}   listings
        </Typography> */}
      {/* </div> */}
      {/* <img src="./assets/images/aeroplane.png" className="absolute top-[42%] right-0 w-20 md:w-10 lg:w-10 xl:w-20 h-20 mr-5 md:mr-10 lg:mr-10 xl:mr-10 bg-[#f27522] p-3 mb-10"/> */}
      <div className="p-3">
        <Typography
          as="a"
          href={`/breeder/${breeder.id}`}
          className={`text-lg font-semibold mb-1 hover:text-${theme.color}-700 text-center truncate`} 
        >
          {breeder.name}

        </Typography>
        <Typography
          as="p"
          className="text-gray-600 px-3 flex text-xs justify-center mb-5"
        >
          <MapPinIcon className="w-3 h-3 mt-0.5 mr-1"/> {breeder.address}
        </Typography>
        <Typography
          as="p"
          className="text-gray-400 px-3 flex text-xs justify-center mb-5 gap-3"
        >
          {/* <StarIcon className={`w-5 h-5 text-${theme.color}-800`}/>
          <StarIcon className={`w-5 h-5 text-${theme.color}-800`}/>
          <StarIcon className={`w-5 h-5 text-${theme.color}-800`}/>
          <StarIcon className={`w-5 h-5 text-${theme.color}-800`}/>
          <StarIcon className={`w-5 h-5 text-${theme.color}-800`}/> */}
          <Rating
            initialRating={breeder.rating}
            quiet={true}
            emptySymbol={<StarIcon className={`w-5 h-5 text-${theme.color}-800`} />}
            fullSymbol={<SolidStarIcon className={`w-5 h-5 text-${theme.color}-800`} />}
            readonly
          />
          <Typography
            as="span"
            className=""
          >
            ({ breeder.rating }/5)
          </Typography>
        </Typography>
        <div className="flex justify-center items-center">
          <Typography
            as="a"
            href={`/breeder/${breeder.id}/follow`}
            className={`p-2 px-5 text-center bg-${theme.color}-50 text-${theme.color}-800 font-semibold rounded-full mt-5 mb-3 w-full hover:bg-${theme.color}-800 hover:text-white`}
          >
            Hire Me
          </Typography>
          {/* <Typography
            as="a"
            href={`/breeder/${breeder.id}`}
            className={`p-2 px-5 text-center bg-${theme.color}-50 text-${theme.color}-800 font-semibold rounded-xl mt-5 text-md mb-3`}
          >
            Visit breeder
          </Typography> */}

        </div>
      </div>
    </div>
  )
}

export default Breeder;
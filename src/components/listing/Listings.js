import React from "react";
import { Typography } from "@material-tailwind/react";
import Listing from "./Listing";
import { styles } from "../../styles/styles";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 769 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Listings = ({ title, link, linkText, listings, background, carousel }) => {

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
            <section className={`my-20 ${ carousel ? '' : styles.listing.wrapper}`}>
              {
                carousel ? 
                <Carousel
                  responsive={responsive}
                  sliderClass="gap-5" 
                  infinite={true}
                >
                  { listings && listings.map((listing, key) => <Listing key={key} listing={listing}/>)}
                </Carousel>
                :
                listings && listings.map((listing, key) => <Listing key={key} listing={listing}/>)
              }
            </section>
          </div>
        </div>
      </section>
    </>
  )

}

export default Listings;
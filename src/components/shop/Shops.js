import React from "react";
import { Typography } from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Shop from "./Shop";
import { styles } from "../../styles/styles";
import { theme } from "../../styles/styles";
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

const Shops = ({ sectionHeading, link, linkText, shops, background, carousel }) => {

  return(
    <>
      <section className={`pt-28 pb-10 sm:pb-20 ${background}`}>
        <div className={styles.container}>
          <div className="w-full mb-3">
            <Typography
              variant="h3"
              className="inline-flex text-gray-600"
            >
              { sectionHeading }
            </Typography>
            <Typography
              as="a"
              href={link}
              className={`flex font-bold mb-5 text-gray-600 float-right mt-2 bg-${theme.color}-50 p-3 px-4 rounded-full hover:bg-${theme.color}-100 hover:text-${theme.color}-900`}
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
                  { shops && shops.map((shop, key) => <Shop key={key} shop={shop}/>)}
                </Carousel>
                :
                shops && shops.map((shop, key) => <Shop key={key} shop={shop}/>)
              }
            </section>
          </div>
        </div>
      </section>
    </>
  )

}

export default Shops;
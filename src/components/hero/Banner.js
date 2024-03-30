import React from "react";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";

// import { PopularSearches } from "../../constants";
import { styles, theme } from "../../styles";
import useFilters from "../../hooks/useFilters";

const Banner = () => {

  const PopularSearches = useFilters();

  
  return (
    <div className="bg-gray-50 pt-20">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-40 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-5 pt-6 lg:flex-row">
          <div className="flex-1 w-full lg:-mt-6">
            <Typography
              as="div"
              className="font-mono flex justify-center items-center text-6xl mb-10 font-bold"
            >
              Find Your
              <Typography
                variant="h1"
                className={`font-mono text-6xl p-6 px-8 border-dashed border-2 border-${theme.color}-600 rounded-full text-${theme.color}-600 mx-4`}
              >
                Dream Pets
              </Typography> in Pakistan
            </Typography>

            <Typography
              as="span"
              className="text-xl text-gray-500"
            >
              PakPets is perfect place for your dream pets. Find your pets, shops & pet foods.
            </Typography>
            <div className="mt-8">
              <form method="post">
                <div className="flex flex-col w-full gap-4 md:gap-0 md:flex-row">
                  <div className="relative flex-1 ">
                    <div className={`${styles.icon.wrapper} pl-5`}>
                      <MagnifyingGlassIcon className={`${styles.icon.default}`}/>
                    </div>
                    <input
                      type="text"
                      name="keyword"
                      placeholder="Pet Keyword"
                      className={`${styles.input.default} md:rounded-l-full`}
                    />
                  </div>
                  <div className="relative flex-1 ">
                    <div className={`${styles.icon.wrapper} pl-3.5`}>
                      <MapPinIcon className={`${styles.icon.default}`}/>
                    </div>
                    <input
                      type="text"
                      name="keyword"
                      placeholder="Location"
                      className={`${styles.input.default} md:border-l-transparent`}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className={`bg-${theme.color}-600 text-white font-bold md:rounded-r-full`}
                  >
                    Search
                  </Button>
                </div>
              </form>
            </div>
            <Typography
              as="p"
              className="font-bold mt-8"
            >
              Popular Searches:
            </Typography>
            <div className="flex flex-wrap gap-3 mt-8 text-center justify-center items-center">
              { 
                PopularSearches && PopularSearches.map((search, index) => {
                  return (
                    <Typography
                      key={index}
                      as="a"
                      href="#"
                      className={`${styles.pill.default} ${styles.pill.indigo}`}
                    >
                      {search.title}
                    </Typography>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
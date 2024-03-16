import React from "react";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";

import { PopularSearches } from "../../constants";
import { Styles } from "../../styles";

const Banner = () => {
  return (
    <div className="bg-gray-50 pt-20">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-40 lg:px-12">
        <div class="flex flex-col items-center justify-between gap-5 pt-6 lg:flex-row">
          <div class="flex-1 w-full lg:-mt-6">
            <Typography
              variant="h1"
              className="font-mono flex justify-center items-center text-6xl mb-10"
            >
              Find Your
              <Typography
                variant="h1"
                className="font-mono text-6xl p-6 px-8 border-dashed border-2 border-indigo-600 rounded-full text-indigo-600 mx-4"
              >
                Dream Pets
              </Typography> in Pakistan
            </Typography>

            <Typography
              variant="span"
              className="text-xl text-gray-500"
            >
              PakPets is perfect place for your dream pets. Find your pets, shops & pet foods.
            </Typography>
            <div class="mt-8">
              <form method="post">
                <div class="flex flex-col w-full gap-4 md:gap-0 md:flex-row">
                  <div class="relative flex-1 ">
                    <div class={`${Styles.icon.wrapper} pl-5`}>
                      <MagnifyingGlassIcon className={`${Styles.icon.default}`}/>
                    </div>
                    <input
                      type="text"
                      name="keyword"
                      placeholder="Pet Keyword"
                      class={`${Styles.input.default} md:rounded-l-full`}
                    />
                  </div>
                  <div class="relative flex-1 ">
                    <div class={`${Styles.icon.wrapper} pl-3.5`}>
                      <MapPinIcon className={`${Styles.icon.default}`}/>
                    </div>
                    <input
                      type="text"
                      name="keyword"
                      placeholder="Location"
                      class={`${Styles.input.default} md:border-l-transparent`}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-indigo-600 text-white font-bold md:rounded-r-full"
                  >
                    Search
                  </Button>
                </div>
              </form>
            </div>
            <div class="flex flex-wrap gap-3 mt-8 text-center justify-center items-center">
              <Typography
                variant="p"
                className="font-bold"
              >
                Popular Searches:
              </Typography>
              { 
                PopularSearches && PopularSearches.map((search, index) => {
                  return (
                    <Typography
                      variant="a"
                      href="#"
                      className="bg-indigo-100 text-black px-4 py-1 rounded-full"
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
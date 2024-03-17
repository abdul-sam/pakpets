import React from "react";
import { PopularCategories } from "../../constants";
import Category from "./Category";
import { Typography } from "@material-tailwind/react";
import { Styles } from "../../styles";

const Categories = () => {
  return (
    <div className="py-14 lg:py-20">
      <div className="w-full max-w-screen-2xl mx-auto px-5">
        <div className="text-center">
          <Typography
            as="span"
            className={`${Styles.pill} w-auto mb-8`}
          >
            Categories
          </Typography>
          <Typography
            variant="h3"
            className="mx-auto font-bold mb-5"
          >
            Top Trending Categories We Focus On
          </Typography>
          <p className="mt-1 text-lg text-black/50">Explore our highlighted categories</p>
        </div>
        <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-6">
          {
            PopularCategories && PopularCategories.map((category, index) => <Category key={index} category={category} />)
          }
        </div>
      </div>
    </div>
  );
}

export default Categories;

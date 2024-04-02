import React from "react";
// import { PopularCategories } from "../../constants";
import Category from "./Category";
import { Typography } from "@material-tailwind/react";
import { styles } from "../../styles/styles";

import useCategories from "../../hooks/useCategories";

const Categories = () => {

  const categories = useCategories();
 
  return (
    <div className="py-14 lg:py-20">
      <div className="w-full max-w-screen-2xl mx-auto px-5">
        <div className="text-center">
          <Typography
            as="span"
            className={`${styles.pill.default} ${styles.pill.indigo} w-auto mb-8 `}
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
            categories && categories.map((category, index) => <Category key={index} category={category} />)
          }
        </div>
      </div>
    </div>
  );
}

export default Categories;

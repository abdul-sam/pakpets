import { Typography } from "@material-tailwind/react";
import React from "react";
import { theme } from "../../styles/styles";

const Category = ({ category }) => {
  return (
    <Typography
      as="a"
      href="#"
    >
      <div className={`flex flex-col items-center justify-between transition-all border border-transparent hover:shadow-md rounded-lg hover:shadow-${theme.color}-100 p-4`}>
        <div className={`p-5 bg-white rounded-full border border-${theme.color}-100`}>
          <img src={category.image_url} alt={category.name} className="w-20 h-auto rounded-xl" />
        </div>
        <h3 className={`mt-4 text-lg text-${theme.color}-900 font-bold`}>{category.name}</h3>
        <h4 className="text-sm">{category.total_ads} {category.name} available</h4>
      </div>
    </Typography>
  );
}

export default Category;
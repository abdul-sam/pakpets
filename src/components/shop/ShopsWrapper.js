import React from "react";
import useShops from "../../hooks/useShops";
import Shops from "./Shops";

const ShopsWrapper = () => {

  const shops = useShops();

  return(
    <>
      <Shops
        sectionHeading="Pet Shops"
        link="/shops"
        linkText="View All"
        shops={shops}
        background="bg-gray-50"
        carousel={false}
      />
    </>
  )

}

export default ShopsWrapper;
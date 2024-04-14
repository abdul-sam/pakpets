import React from "react";
import useBreeders from "../../hooks/useBreeders";
import Breeders from './Breeders'

const BreedersWrapper = () => {

  const breeders = useBreeders();

  return(
    <>
      <Breeders
        sectionHeading="Top Breeders"
        link="/breeders"
        linkText="View All"
        breeders={breeders}
        background="bg-white"
        carousel={false}
      />
    </>
  )

}

export default BreedersWrapper;
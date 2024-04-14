import React from "react";
import { Typography } from "@material-tailwind/react";

const FooterHeading = ({ heading }) => {
  return(
    <Typography
      variant="h6"
      className="mb-6 flex font-semibold justify-start"
    >
      { heading }
    </Typography>
  )
}

export default FooterHeading;
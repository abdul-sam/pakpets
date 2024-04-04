import React from "react";
import { Typography } from "@material-tailwind/react";
import { theme } from "../../styles/styles";

const FooterLink = ({ title, link }) => {
  return(
    <Typography
      as="a"
      href={link}
      className={`mb-3 hover:text-${theme.color}-800 flex justify-start text-sm font-normal`}
    >
      { title }
    </Typography>
  )
}

export default FooterLink;
import React from "react";
import {

  Typography,
  List,
  ListItem,
} from "@material-tailwind/react";

import Dropdown from "../utilities/Dropdown";
import { CategoriesDropdownList } from "../../constants";

const NavList = () => {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 items-center">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-sm font-bold uppercase">Home</ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-sm font-bold uppercase">Pet Shops</ListItem>
      </Typography>
      <Dropdown
        title={'Resources'}
        dropdownItems={CategoriesDropdownList}
        ulKlasses="grid grid-cols-3"
      />
      <Dropdown
        title='Categories'
        dropdownItems={CategoriesDropdownList}
        ulKlasses="grid grid-cols-3"
      />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-sm font-bold uppercase">
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}

export default NavList;
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightStartOnRectangleIcon
} from "@heroicons/react/24/outline";

import Dropdown from "../utilities/Dropdown";
import NavList from "./NavList";

import { SellMenuItems } from "../../constants";
import SellIcon from "../../assets/images/icons/sell.png";
import { theme } from "../../styles";
 
 
const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <Navbar className="mx-auto p-5 max-w-full xl:px-16 font-mono shadow-none border-b border-gray/80 sticky top-0 fixed z-10">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h4"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 font-mono"
        >
          PAKPETS
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <div className="flex gap-1 items-center font-bold">
            <ArrowRightStartOnRectangleIcon className="h-4 w-4"/>
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 lg:ml-2 font-mono text-sm font-bold uppercase px-0"
            >
              Login
            </Typography>
          </div>
          <Dropdown
            title='Sell'
            icon={SellIcon}
            dropdownItems={SellMenuItems}
            klasses={`bg-${theme.color}-600 text-white font-bold px-5 py-3 rounded-full hover:bg-${theme.color}-800 hover:text-white`}
          />
          {/* <Button variant="gradient" size="sm">
            Sign In
          </Button> */}
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <div className="flex gap-1 items-center font-bold">
            <ArrowRightStartOnRectangleIcon className="h-4 w-4"/>
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 lg:ml-2 font-mono text-sm font-bold uppercase px-0"
            >
              Login
            </Typography>
          </div>
          <Dropdown
            title='Sell'
            icon={SellIcon}
            dropdownItems={SellMenuItems}
            klasses={`bg-${theme.color}-400 text-white font-bold px-5 rounded-full hover:bg-${theme.color}-800 hover:text-white`}
          />
        </div>
      </Collapse>
    </Navbar>
  );
}

export default Header;
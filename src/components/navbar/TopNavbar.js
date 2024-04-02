import React from "react";
import { Button } from "@material-tailwind/react";
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

const TopNavbar = () => {
  return (
    <div className="z-10 absolut top-0 bg-white px-6 flex justify-between items-center border-b">
      <div className="flex gap-1 items-center">
        <div>
          <Button variant="text" className="text-black font-bold capitalize text-sm hover:bg-white px-3">
            Quick Help
          </Button>
        </div>
        <div>
          <Button variant="text" className="text-black font-bold capitalize text-sm hover:bg-white px-3">
            About Us
          </Button>
        </div>
        <div>
          <Button variant="text" className="text-black font-bold capitalize text-sm hover:bg-white px-3">
            Contact Us
          </Button>
        </div>
      </div>

      <div className="hidden sm:flex gap-8 items-center">
        <div className="flex items-center gap-1">
          <PhoneIcon className="h-5 w-5 text-blue-500" />
          <span className="text-sm">Need help? Call us:</span>
          <span className="font-semibold text-sm">(+800) 1234 5678 90</span>
        </div>
        <div className="flex items-center gap-1">
          <EnvelopeIcon className="h-5 w-5 text-blue-500" />
          <span className="font-semibold text-sm">info@company.com</span>
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <div>
          <Button variant="text" className="text-black font-bold capitalize text-sm hover:bg-white px-3">
            Sign In
          </Button>
        </div>
        <div>
          <Button variant="text" className="text-black font-bold capitalize text-sm hover:bg-white px-3">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
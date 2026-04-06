import React from "react";
import { Link } from "react-router-dom";
import LocationHeader from "../../../icons/LocationHeader";
import PhoneHeader from "../../../icons/PhoneHeader";

const TopLeft = () => {
  return (
    <div className="flex items-center gap-2 sm:gap-3 lg:gap-6 justify-between ">
      <div>
        <Link
          className="flex items-center gap-2 hover:text-[#FF624C] transition-all duration-150 ease-in-out  "
          to={"https://maps.app.goo.gl/Q2Sc2SEXxMzaRDRA9"}
          target="_blank"
        >
          <LocationHeader />
          <p className="line-clamp-1 ">
            <span className="hidden sm:block">
              123 Main Street, AnyTown USA
            </span>
          </p>
        </Link>
      </div>
      <span className="w-[1px] h-6 sm:h-8 bg-[#CBCBCB] hidden sm:block "></span>
      <div>
        <Link
          className="flex items-center gap-2 hover:text-[#FF624C] transition-all duration-150 ease-in-out"
          to={"tel:1613529163"}
          target="_blank"
        >
          <PhoneHeader />
          <p className="line-clamp-1 ">
            <span className="hidden sm:block">+1 (555) 123-4567</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default TopLeft;

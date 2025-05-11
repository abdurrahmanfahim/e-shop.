import React from "react";
import { LiaPhoneSolid } from "react-icons/lia";
import { TfiLocationPin } from "react-icons/tfi";
import { Link } from "react-router-dom";

const TopLeft = () => {
  return (
    <div className="flex items-center gap-6 ">
      <div className="flex items-center gap-2">
        <TfiLocationPin className="text-base" />
        <Link to={"https://maps.app.goo.gl/Q2Sc2SEXxMzaRDRA9"} target="_blank">
        123 Main Street, AnyTown USA
      </Link>
      </div>
      <span className="w-[1px] h-8 bg-[#CBCBCB] "></span>
      <div className="flex items-center gap-2">
        <LiaPhoneSolid className="text-lg" />
      <Link to={"tel:1613529163"} target="_blank">
        +1 (555) 123-4567
      </Link>
      </div>
    </div>
  );
};

export default TopLeft;

import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const TopLeft = () => {
  return (
    <div className="flex items-center gap-2 sm:gap-3 lg:gap-6 justify-between">
      <div>
        <Link className="flex items-center gap-2 hover:text-green transition-all duration-150 ease-in-out" to="https://maps.app.goo.gl/Q2Sc2SEXxMzaRDRA9" target="_blank">
          <IoLocationOutline className="text-base shrink-0" />
          <p className="line-clamp-1 hidden sm:block">123 Main Street, AnyTown USA</p>
        </Link>
      </div>
      <span className="w-[1px] h-6 sm:h-8 bg-[#CBCBCB] hidden sm:block" />
      <div>
        <Link className="flex items-center gap-2 hover:text-green transition-all duration-150 ease-in-out" to="tel:1613529163" target="_blank">
          <IoCallOutline className="text-base shrink-0" />
          <p className="line-clamp-1 hidden sm:block">+1 (555) 123-4567</p>
        </Link>
      </div>
    </div>
  );
};

export default TopLeft;

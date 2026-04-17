import { MdCall } from "react-icons/md";
import { BsEnvelopeFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { footerCategories, footerContact, footerLinks, footerSocials, footerSupports } from "../../productDetailsArrays";

const iconMap = {
  phone:    <MdCall className="text-base" />,
  email:    <BsEnvelopeFill className="text-base" />,
  location: <IoLocationSharp className="text-base" />,
};

const FooterBottom = () => {
  return (
    <div className="mt-12 lg:mt-[100px] mb-12 lg:mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 font-montserrat text-black mb-12 lg:mb-20 gap-8 lg:gap-6">
        {/* Logo + Contact */}
        <div className="flex flex-col gap-4 justify-between text-center sm:text-left">
          <Link to="/"><img className="mx-auto sm:mx-0" src="/images/logo.png" alt="footerLogo" /></Link>
          <ul className="flex flex-col gap-3 flex-wrap font-normal text-sm lg:text-base leading-6">
            {footerContact.map((item) => (
              <li key={item.label} className="relative pl-6">
                <Link className="hover:text-green flex items-center justify-center sm:justify-start gap-2" to={item.to}>
                  <span className="absolute top-1/2 -translate-y-1/2 left-0 text-[#646464]">
                    {item.label.includes("+") ? iconMap.phone : item.label.includes("@") ? iconMap.email : iconMap.location}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Links + Supports + Categories */}
        <div className="sm:col-span-2 lg:col-span-1 flex justify-between gap-8 lg:gap-12">
          {[
            { title: "Links", data: footerLinks },
            { title: "Supports", data: footerSupports },
          ].map(({ title, data }) => (
            <div key={title}>
              <h4 className="font-semibold leading-[30px] font-poppins mb-4 lg:mb-6 text-lg lg:text-xl">{title}</h4>
              <ul className="text-black font-normal text-sm lg:text-base leading-6 flex flex-col gap-3">
                {data.map((item) => (
                  <li key={item.label}><Link className="hover:text-green" to={item.to}>{item.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-semibold leading-[30px] font-poppins mb-4 lg:mb-6 text-lg lg:text-xl">Categories</h4>
          <ul className="text-black font-normal text-sm lg:text-base leading-6 flex flex-col gap-3">
            {footerCategories.map((item) => (
              <li key={item.label}><Link className="hover:text-green" to={item.to}>{item.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Payments + Follow */}
        <div className="flex flex-col gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-semibold leading-[30px] font-poppins mb-4 lg:mb-6 text-lg lg:text-xl">Payments</h4>
            <img className="mx-auto sm:mx-0 w-fit" src="/images/payment.png" alt="payment gateway" />
          </div>
          <div>
            <h4 className="font-semibold leading-[30px] font-poppins mb-4 lg:mb-6 text-lg lg:text-xl">Follow Us</h4>
            <ul className="text-black font-normal text-sm lg:text-base leading-6 justify-center flex md:flex-col gap-3">
              {footerSocials.map((item) => (
                <li key={item.label}><Link className="hover:text-green" to={item.to}>{item.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-t border-[#CBCBCB] h-[1px]" />
      <div className="flex flex-col lg:flex-row justify-between text-[#646464] font-montserrat font-normal text-xs lg:text-sm leading-5 pt-2 gap-2 lg:gap-0 text-center lg:text-left">
        <p>Copyright © {new Date().getFullYear()} E-Shop. All Rights Reserved.</p>
        <p>
          <Link className="hover:text-green" to="#">Privacy Policy</Link>{" "}|{" "}
          <Link className="hover:text-green" to="#">Terms & Condition</Link>{" "}|{" "}
          <Link className="hover:text-green" to="#">Sitemap</Link>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;

import { MdCall } from "react-icons/md";
import { BsEnvelopeFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { footerCategories, footerContact, footerLinks, footerSupports } from "../../productDetailsArrays";

const contactIcon = (label) => {
  if (label.includes("+")) return <MdCall className="text-sm shrink-0" />;
  if (label.includes("@")) return <BsEnvelopeFill className="text-sm shrink-0" />;
  return <IoLocationSharp className="text-sm shrink-0" />;
};

const FooterBottom = () => {
  return (
    <div className="bg-green rounded-2xl lg:rounded-3xl mt-4 lg:mt-6 px-6 sm:px-10 lg:px-16 pt-10 lg:pt-14 pb-6 lg:pb-8">

      {/* Main grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-10 lg:mb-14">

        {/* Brand */}
        <div className="col-span-2 sm:col-span-2 lg:col-span-1 flex flex-col gap-5">
          <Link to="/">
            <img src="/images/logo.png" alt="logo" className="brightness-0 invert h-8 w-auto" />
          </Link>
          <p className="font-montserrat text-sm text-white/60 leading-6 max-w-[240px]">
            Your one-stop shop for the latest electronics and gadgets.
          </p>
          <ul className="flex flex-col gap-3">
            {footerContact.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="flex items-start gap-2 font-montserrat text-sm text-white/70 hover:text-white transition-colors">
                  <span className="mt-0.5 text-white/50">{contactIcon(item.label)}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-poppins font-semibold text-white text-base mb-4 lg:mb-6">Links</h4>
          <ul className="flex flex-col gap-3">
            {footerLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="font-montserrat text-sm text-white/60 hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-poppins font-semibold text-white text-base mb-4 lg:mb-6">Support</h4>
          <ul className="flex flex-col gap-3">
            {footerSupports.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="font-montserrat text-sm text-white/60 hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-poppins font-semibold text-white text-base mb-4 lg:mb-6">Categories</h4>
          <ul className="flex flex-col gap-3">
            {footerCategories.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="font-montserrat text-sm text-white/60 hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">

        {/* Payment */}
        <img src="/images/payment.png" alt="payment" className="h-6 brightness-0 invert opacity-60" />

        {/* Copyright */}
        <p className="font-montserrat text-xs text-white/40 text-center order-last sm:order-none">
          © {new Date().getFullYear()} eGearX. All Rights Reserved.
        </p>

        {/* Socials */}
        <div className="flex items-center gap-3">
          {[
            { icon: <FaFacebookF />, to: "https://facebook.com" },
            { icon: <FaTwitter />, to: "https://twitter.com" },
            { icon: <FaInstagram />, to: "https://instagram.com" },
          ].map((s, i) => (
            <Link
              key={i}
              to={s.to}
              target="_blank"
              className="size-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all text-sm"
            >
              {s.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;

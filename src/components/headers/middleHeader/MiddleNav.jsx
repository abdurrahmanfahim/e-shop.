import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/all-products", label: "All Products" },
  { to: "/all-products", label: "Limited Sale 👋🏻", className: "uppercase text-orange" },
  { to: "/all-products", label: "Best Seller" },
  { to: "/all-products", label: "New Arrival" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const MiddleNav = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 lg:hidden flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-[#EBEBEB]">
          <img src="/images/logo.png" alt="logo" className="h-7" />
          <button onClick={onClose} className="text-2xl hover:text-orange transition-colors">
            <IoClose />
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col font-montserrat text-base font-medium px-4 py-4 gap-1">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                onClick={onClose}
                className={`block px-3 py-2.5 rounded-lg hover:bg-lightGray hover:text-orange transition-colors ${link.className ?? "text-black"}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MiddleNav;

import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const MiddleNav = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col p-6 lg:hidden">
      <div className="flex justify-between items-center mb-8">
        <img src="images/logo.png" alt="logo" className="h-8" />
        <button onClick={onClose} className="text-3xl">
          <IoClose />
        </button>
      </div>

      <ul className="flex flex-col space-y-6 text-lg font-montserrat">
        <li>
          <Link
            to={"/all-products"}
            onClick={onClose}
            className="block py-2 hover:text-orange"
          >
            All Categories
          </Link>
        </li>
        <li>
          <Link
            to={"/all-products"}
            onClick={onClose}
            className="block py-2 hover:text-orange"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to={"/blog"}
            onClick={onClose}
            className="block py-2 hover:text-orange"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to={"/contact"}
            onClick={onClose}
            className="block py-2 hover:text-orange"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to={"/all-products"}
            onClick={onClose}
            className="block py-2 hover:text-orange uppercase"
          >
            Limited Sale 👋🏻
          </Link>
        </li>
        <li>
          <Link
            to={"/all-products"}
            onClick={onClose}
            className="block py-2 hover:text-orange"
          >
            Best Seller
          </Link>
        </li>
        <li>
          <Link
            to={"/all-products"}
            onClick={onClose}
            className="block py-2 hover:text-orange"
          >
            New Arrival
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MiddleNav;

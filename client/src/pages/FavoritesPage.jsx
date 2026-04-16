import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../contexts/FavoritesContext";
import Container from "../components/layouts/Container";
import { GoHeartFill } from "react-icons/go";

const FavoritesPage = () => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  return (
    <Container>
      <div className="mt-8 lg:mt-16 mb-12 lg:mb-20">
        <div className="flex gap-2 items-center font-montserrat text-sm lg:text-base text-black mb-8">
          <Link to="/" className="hover:text-green">Home</Link> <span>|</span>
          <span className="font-bold">Favorites</span>
        </div>

        <h1 className="font-poppins font-bold text-3xl lg:text-[56px] leading-[40px] lg:leading-17 mb-8">
          My Favorites
        </h1>

        {favorites.length === 0 ? (
          <div className="text-center py-20">
            <GoHeartFill className="text-5xl text-[#CBCBCB] mx-auto mb-4" />
            <p className="font-montserrat text-lg text-black mb-6">No favorites yet.</p>
            <Link to="/all-products">
              <button className="font-montserrat font-bold text-base text-green underline">Browse Products</button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {favorites.map((item) => (
              <div key={item.id} className="bg-white border border-[#C3C3C3] rounded-10p p-4 group relative">
                <button
                  onClick={() => toggleFavorite(item)}
                  className="absolute top-3 right-3 z-10"
                >
                  <GoHeartFill className="text-red-500 text-xl" />
                </button>
                <Link to={`/product-details/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-square object-contain mb-3"
                  />
                  <p className="font-montserrat text-xs uppercase tracking-widest text-black/50 mb-1 line-clamp-1">{item.type}</p>
                  <h4 className="font-poppins font-semibold text-base line-clamp-2 group-hover:text-green group-hover:underline transition-all">
                    {item.title}
                  </h4>
                  <p className="font-poppins font-bold text-green text-lg mt-2">${item.price}</p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default FavoritesPage;

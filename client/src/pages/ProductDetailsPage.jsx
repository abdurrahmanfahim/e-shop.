import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../components/layouts/Container";
import ProductLayout from "../components/layouts/ProductLayout";
import ProductDetailsCard from "../components/ProductDetailsCard";
import ProductDetailsSkeleton from "../components/ProductDetailsSkeleton";
import ProductsContext from "../contexts/ProductsContext";
import LongArrow from "../icons/LongArrow";

const ProductDetailsPage = () => {
  const allProducts = useContext(ProductsContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const relatedProducts = allProducts
    .filter((p) => p.id !== Number(id))
    .slice(0, 5);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const originalId = Number(id) % 10000;
        const res = await fetch(`https://dummyjson.com/products/${originalId}`);
        const data = await res.json();
        setProduct(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  if (loading)
    return (
      <Container>
        <ProductDetailsSkeleton />
      </Container>
    );
  if (!product)
    return (
      <Container>
        <div className="py-20 text-center font-poppins text-xl">
          Product not found.
        </div>
      </Container>
    );

  return (
    <Container>
      <div className="mt-8 lg:mt-16">
        <div className="flex flex-wrap gap-2 lg:gap-4 items-center text-black font-montserrat text-sm lg:text-base leading-5 lg:leading-6">
          <span>Home</span> <span>|</span>
          <span className="hidden sm:inline">{product.category}</span>
          <span className="hidden sm:inline">|</span>
          <span className="font-bold">
            <span className="sm:hidden line-clamp-1">{product.title}</span>
            <span className="hidden sm:inline line-clamp-1">
              {product.title}
            </span>
          </span>
        </div>
        <ProductDetailsCard product={product} />
        <hr className="w-full border-t border-t-[#C3C3C3] mt-12 lg:mt-20 pt-8 lg:pt-16" />

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full mb-6 lg:mb-12 gap-4 sm:gap-0">
          <h2 className="text-black font-['Poppins'] font-semibold leading-8 lg:leading-[46px] text-2xl lg:text-4xl capitalize">
            Related Products
          </h2>
          <button>
            <Link
              className="flex items-center gap-3 lg:gap-4 font-montserrat text-sm lg:text-base font-bold leading-5 lg:leading-6 text-green capitalize"
              to={"/all-products"}
            >
              View All <LongArrow />
            </Link>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 lg:gap-x-5.5 mb-6 md:mb-12 lg:mb-16">
          {relatedProducts.map((item) => (
            <ProductLayout
              key={item.id}
              type={item.type}
              title={item.title}
              stars={item.stars}
              rating={item.rating}
              image={item.image}
              price={item.price}
              discounted={item.discounted}
              inStoke={item.inStoke}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProductDetailsPage;

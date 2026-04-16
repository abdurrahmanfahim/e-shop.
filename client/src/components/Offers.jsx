import { Link } from "react-router-dom";
import Container from "./layouts/Container";

const Offers = () => {
  return (
    <Container>
      <div className="flex justify-between items-center mb-8 lg:mb-20 flex-col lg:flex-row gap-2">
        <Link to={"/all-products"}>
          <picture>
            <source media="(max-width: 639px)" srcSet="/images/offers/free-shipping-sm.webp" />
            <img
              className="rounded-15p w-full h-auto"
              src="/images/offers/free-shipping.webp"
              alt="free shipping banner"
              loading="lazy"
            />
          </picture>
        </Link>
        <Link to={"/all-products"}>
          <picture>
            <source media="(max-width: 1023px)" srcSet="/images/offers/black_friday-md.webp" />
            <img
              className="rounded-15p w-full h-auto"
              src="/images/offers/black_friday.webp"
              alt="black friday banner"
              loading="lazy"
            />
          </picture>
        </Link>
      </div>
    </Container>
  );
};

export default Offers;

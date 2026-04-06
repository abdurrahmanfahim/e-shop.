import { Link } from "react-router-dom";
import Container from "./layouts/Container";

const Offers = () => {
  return (
    <Container>
      <div className="flex justify-between items-center mb-8 lg:mb-20 flex-col lg:flex-row gap-2">
        <Link to={"/all-products"}>
          <img
            className="rounded-15p "
            src="./images/offers/offer.webp"
            alt="banner"
          />
        </Link>
        <Link to={"/all-products"}>
          <img
            className="rounded-15p "
            src="./images/offers/black_friday.webp"
            alt="banner"
          />
        </Link>
      </div>
    </Container>
  );
};

export default Offers;

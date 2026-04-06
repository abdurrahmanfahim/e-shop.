import { Link } from "react-router-dom";
import Container from "./layouts/Container";

const Banner = () => {
  return (
    <div className="mt-0 lg:mt-8 mb-6 lg:mb-20">
      <Container>
        <Link to={"/all-product"}>
          <img
            className="rounded-15p w-full h-auto object-cover"
            src="./images/banner/banner.webp"
            alt="banner"
            loading="lazy"
          />
        </Link>
      </Container>
    </div>
  );
};

export default Banner;

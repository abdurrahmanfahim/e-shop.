import { Link } from "react-router-dom";
import Container from "./layouts/Container";

const Banner = () => {
  return (
    <div className="mt-0 lg:mt-8 mb-6 lg:mb-20">
      <Container>
        <Link to={"/all-products"}>
          <picture>
            <source media="(max-width: 639px)" srcSet="/images/banner/banner-sm.webp" />
            <source media="(max-width: 1023px)" srcSet="/images/banner/banner-md.webp" />
            <img
              className="rounded-15p w-full h-auto object-cover"
              src="/images/banner/banner.webp"
              alt="banner"
              loading="lazy"
            />
          </picture>
        </Link>
      </Container>
    </div>
  );
};

export default Banner;

import HeadPhone from "../icons/HeadPhone";
import Shield from "../icons/Shield";
import Shipping from "../icons/Shipping";
import Transparent from "../icons/Transparent";
import { facilityData } from "../productDetailsArrays";
import Container from "./layouts/Container";

const iconMap = {
  HeadPhone:   <HeadPhone />,
  Shield:      <Shield />,
  Shipping:    <Shipping />,
  Transparent: <Transparent />,
};

const Facility = () => {
  return (
    <div className="py-8 lg:py-14 border-y border-[#EBEBEB]">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {facilityData.map((item, i) => (
            <div
              key={item.title}
              className={`flex gap-3 lg:gap-5 items-start lg:items-center px-0 lg:px-8 ${i !== 0 ? "lg:border-l lg:border-[#EBEBEB]" : ""}`}
            >
              <div className="flex-shrink-0 size-10 lg:size-12 flex items-center justify-center bg-green/10 rounded-full p-2">
                {iconMap[item.icon]}
              </div>
              <div className="text-black font-montserrat">
                <h6 className="font-bold text-sm lg:text-base leading-5 lg:leading-6">{item.title}</h6>
                <p className="font-normal text-xs lg:text-sm leading-4 lg:leading-5 text-black/60 mt-0.5 line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Facility;

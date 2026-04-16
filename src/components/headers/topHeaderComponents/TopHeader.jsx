import Container from "../../layouts/Container";
import TopLeft from "./TopLeft";
import TopRight from "./TopRight";

const TopHeader = () => {
  return (
    <div className="border-b border-[#CBCBCB] font-montserrat text-xs md:text-sm font-normal leading-10 sm:leading-16 text-black  ">
      <Container>
        <div className="flex justify-evenly lg:justify-between items-center ">
          <TopLeft />
          <TopRight />
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;

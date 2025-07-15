import Container from "../../layouts/Container";
import TopLeft from "./TopLeft";
import TopRight from "./TopRight";

const TopHeader = () => {
  return (
    <div className="border-b border-[#CBCBCB] font-['montserrat'] text-xs md:text-sm font-normal leading-10 sm:leading-16 text-[#303030] px-2 lg:px-0 ">
      <Container>
        <div className="flex justify-between flex-col sm:flex-row  ">
          <TopLeft />
          <TopRight />
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;

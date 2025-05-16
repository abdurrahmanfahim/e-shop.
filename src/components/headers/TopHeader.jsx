import Container from "../layouts/Container";
import TopLeft from "./topHeaderComponents/TopLeft";
import TopRight from "./topHeaderComponents/TopRight";

const TopHeader = () => {
  return (
    <div className="border-b border-[#CBCBCB] font-['montserrat'] text-sm font-normal leading-16 text-[#303030] ">
      <Container>
        <div className="flex justify-between ">
          <TopLeft />
          <TopRight />
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;

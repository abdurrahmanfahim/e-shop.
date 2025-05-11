import Container from "../layouts/Container";
import TopLeft from "./topHeaderComponents/TopLeft";
import TopRight from "./topHeaderComponents/TopRight";

const TopHeader = () => {
  return (
    <div className="border-b border-[#CBCBCB] py-4 font-['montserrat'] text-sm font-normal leading-5 text-[#303030] ">
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

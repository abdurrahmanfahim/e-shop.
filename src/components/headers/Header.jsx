import React from "react";
import TopHeader from './topHeaderComponents/TopHeader'
import MiddleHeader from "./middleHeader/MiddleHeader";
import BottomHeader from "./bottomHeaderComponent/BottomHeader";


const Header = () => {
  return (
    <>
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
    </>
  );
};

export default Header;

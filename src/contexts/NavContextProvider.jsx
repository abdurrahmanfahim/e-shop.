import React, { useState } from "react";
import NavContext from "./navContext";

const NavContextProvider = () => {
  const [lang, setLang] = useState("english");
  return (
    <NavContext.Provider
      value={{ lang, setLang, springSaleEnd, setSpringSaleEnd }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;

import React from "react";

import "../../styles/colors.css";
import "../../styles/header/header.css";
import "../../styles/header/logo.css";
import FullMenu from "./FullMenu";
import DropMenu from "./DropMenu";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="blueColor header">
      <FullMenu />
      <DropMenu />
      <img
        src="https://mvs.gov.ua/upload/image/simvol_logo_mvs.png"
        className="logo"
      ></img>
    </div>
  );
}

export default Header;

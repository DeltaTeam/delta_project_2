import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";

import dropMenu from "./../../styles/header/dropMenu.css";

function DropMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="dropMenu">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon fontSize="large" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <a href="/">
          <MenuItem onClick={handleClose}>Список правопорушень</MenuItem>
        </a>
        <a href="/add_crime">
          <MenuItem onClick={handleClose}>Додати правопорушення</MenuItem>
        </a>
        <a href="/rules">
          <MenuItem onClick={handleClose}>Правила паркування</MenuItem>
        </a>
      </Menu>
    </div>
  );
}

export default DropMenu;

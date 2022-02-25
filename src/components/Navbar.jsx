import React from "react";
import clsx from "clsx";

import Dropdown from "../components/Dropdown";

const Navbar = ({ isSideNavOpen, toggleSideNav }) => {
  return (
    <div id="navbar">
      <div className="d-flex align-items-center">
        <div
          className={clsx({ open: isSideNavOpen }, "menu")}
          onClick={toggleSideNav}
        >
          <img
            className="hamburger open"
            src="./assets/vectors/hamburger-open.svg"
            alt="hamburger"
          />
          <img
            className="hamburger close"
            src="./assets/vectors/hamburger-close.svg"
            alt="hamburger"
          />
        </div>
        <img className="logo" src="./assets/img/logo.png" alt="logo" />
        <h4 className="fw-500 fs-16 d-none d-sm-block">PinkSale</h4>
      </div>
      <div className="d-flex align-items-center">
        <Dropdown dropdownItems={["Launchpad", "Fair Launch", "Token"]}>
          <img src="./assets/vectors/add.svg" alt="add" />
          <div className="text">Create</div>
        </Dropdown>
        <Dropdown accent>
          <img src="./assets/img/bsc.png" alt="bsc" />
          <div className="text">BSC MAINNET</div>
        </Dropdown>
        <Dropdown>Connect</Dropdown>
      </div>
    </div>
  );
};

export default Navbar;

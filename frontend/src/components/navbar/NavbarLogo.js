import React from "react";
import { Link } from "react-router-dom";
import twitter from "../../twitter.png";

const NavbarLogo = () => {
  return (
    <div className="logo-wrapper">
      <Link to="/">
        <img src={twitter} alt="" />
      </Link>
    </div>
  );
};

export default NavbarLogo;
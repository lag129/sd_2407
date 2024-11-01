"use strict";

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} width="175" ></img>
      </Link>
    </header>
  );
};

export default Header;
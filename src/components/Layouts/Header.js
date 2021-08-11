import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Menu from "./Menu.js";

const Header = ({ carts, mode, menus }) => {
  return (
    <header
      className={`${mode === "light" ? "absolute" : ""} w-full z-50 px-4`}
    >
      <div className="container mx-auto py-5">
        <div className="flex flex-stretch items-center">
          <div className="w-56 items-center flex">
            <Link to="/">
              <img
                src="/img/content/logo.png"
                alt="Luxspace | Fulfill your house with beautiful furniture"
              />
            </Link>
          </div>
          <div className="w-full"></div>
          <Menu mode={mode} carts={carts} menus={menus} />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  mode: PropTypes.string,
  carts: PropTypes.array,
  menus: PropTypes.array,
};

export default Header;

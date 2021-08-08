import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Menu from "./Menu.js";

const Header = ({ carts, currentPage }) => {
  return (
    <header
      className={`${currentPage !== "details" && "absolute"} w-full z-50 px-4`}
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
          <Menu currentPage={currentPage} carts={carts} />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  carts: PropTypes.array,
  currentPage: PropTypes.array,
};

export default Header;

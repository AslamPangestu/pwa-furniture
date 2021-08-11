import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Breadcrumb = ({ menus }) => {
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          {menus &&
            menus.map((item, idx) => (
              <li key={idx}>
                {item.link ? (
                  <Link to={item.link} aria-label="current-page">
                    {item.label}
                  </Link>
                ) : (
                  <div aria-label="current-page">{item.label}</div>
                )}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

Breadcrumb.propTypes = {
  menus: PropTypes.array,
};

export default Breadcrumb;

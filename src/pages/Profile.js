import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Header from "../components/Layouts/Header";
import Breadcrumb from "../components/Layouts/Breadcrumb";
import { urlB64ToUint8Array } from "../utils";

const Profile = ({ cart }) => {
  const MENUS = [{ label: "My Profile", link: "" }];
  const HEADER_MENUS = [
    { label: "Showcase", link: "/showcases" },
    { label: "Catalog", link: "/catalogs" },
    { label: "Delivery", link: "/deliveries" },
    { label: "Reward", link: "/rewards" },
  ];
  const subscribe = async () => {
    const KEY =
      "BHNL6wCMyWZqOF-Y5YUf_j0NvhJEzyG5I4J4s8kW5pC68TuY_av4WFoYBCRs6T4vxt4IGEbLJID3N94PPM1E-P0";
    try {
      await global.registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlB64ToUint8Array(KEY),
      });
      console.log("Success Subscribe");
    } catch (error) {
      console.error("Err Subscribe", error);
    }
  };

  return (
    <>
      <Header mode="dark" menus={HEADER_MENUS} carts={cart} />
      <Breadcrumb menus={MENUS} />
      <section className="">
        <div className="container mx-auto min-h-screen">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full md:w-4/12 text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 mt-20">
                <img
                  src="./img/content/my-profile.png"
                  alt="my-profile"
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-xl font-semibold mb-1">Masayoshi Angga</h2>
              <p className="text-lg mb-12">Jr. Website Developer</p>
            </div>
          </div>
          <ul className="max-w-full md:max-w-lg mx-auto">
            <li className="pb-3 mb-2 flex items-center justify-between w-full border-b border-gray-100">
              <span>Subscribe to Notification</span>
              <button
                className="hover:underline appearance-none"
                onClick={subscribe}
              >
                Subscribe
              </button>
            </li>
            <li className="pb-3 mb-2 flex items-center justify-between w-full border-b border-gray-100">
              <span>Test Notification</span>
              <button className="hover:underline appearance-none">
                Push Now
              </button>
            </li>
          </ul>
          <div className="text-center mt-12">
            <Link
              to="/"
              className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

Profile.propTypes = {
  cart: PropTypes.array,
};

export default Profile;

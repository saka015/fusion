import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import { Link } from "react-router-dom";

import payment from "./payment.png";

function Footer() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div className="px-2">
      <hr />
      <div
        className="px-16 pt-10"
        style={{
          backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <div className="up sm:flex justify-around my-4">
          <div className="one flex flex-col flex-1 ">
            <h1
              className="font-medium my-2"
              style={{
                backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              Categories
            </h1>
            <Link
              to=""
              className="text-gray-600 text-sm mt-1"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Women
            </Link>
            <Link
              to=""
              className="text-gray-600 text-sm mt-1"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Men
            </Link>
            <Link
              to=""
              className="text-gray-600 text-sm mt-1"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Shoes
            </Link>
            <Link
              to=""
              className="text-gray-600 text-sm mt-1"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Accessories
            </Link>
            <Link
              to=""
              className="text-gray-600 text-sm mt-1"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              New Arrivals
            </Link>
          </div>
          <div className="two flex flex-col flex-1">
            <h1
              className="font-medium my-2"
              style={{
                backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              Link
            </h1>
            <Link
              to=""
              className="text-gray-600 text-sm mt-1"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              FAQ
            </Link>
            <Link
              to=""
              className="text-gray-600 text-sm mt-1"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Pages
            </Link>
            <Link
              to=""
              className="text-gray-600 text-sm mt-1"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Stores
            </Link>
            <Link
              to=""
              className="text-gray-600 text-sm mt-1"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Compare
            </Link>
            <Link
              to=""
              className="text-gray-600 text-sm mt-1"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Cookies
            </Link>
          </div>
          <div className="three  flex-1">
            <h1
              className="font-medium my-2"
              style={{
                backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              About
            </h1>
            <h2
              className="text-gray-600 text-sm mt-1"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
              voluptatum fugit, non animi, placeat aliquid praesentium sequi
              molestiae in distinctio blanditiis mollitia. Earum asperiores et
              delectus totam inventore unde fuga?
            </h2>
          </div>
          <div className="Four flex-1">
            <h1
              className="font-medium my-2"
              style={{
                backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              Contact
            </h1>
            <h2
              className="text-gray-600 text-sm mt-1"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores illum repellat voluptas iure, quia vitae id ratione
              neque aut minima, amet itaque, fuga dolorum ad eaque aliquam qui
              earum error.
            </h2>
          </div>
        </div>
        <div className="down sm:flex justify-between mt- ">
          <div className="left mt-10 flex">
            <Link to="/">
              {" "}
              <span className="logo text-2xl cursor-pointer">Fusion</span>
            </Link>
            <span className="copyright ml-4 mt-2 text-sm sm:text-normal">
              Copyright 2024.All Rights Reserved
              {/* developed by saka_codes */}
            </span>
          </div>
          <div className="right">
            <img src={payment} alt="" />
          </div>
        </div>
      </div>

      {/* myfooter ends here */}
    </div>
  );
}

export default Footer;

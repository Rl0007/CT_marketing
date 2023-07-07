import React from "react";
import home_image from "../images/mountian1.jpg";
import "./HomePage.css";
import Navbar from "../Components/Navbar.js";
import { Outlet } from "react-router-dom";
import Navbar2 from "../Components/Navbar2";
function HomePage() {
  return (
    <div id="Homepage_scroll">
      {/* <Navbar /> */}
      <div className="Homepage">
        <img src={home_image} alt="" className="Homepage_image" />
        <div className="title">
          <p className="los">LOSANGELES</p>
          <p className="mountain">MOUNTAINS</p>
        </div>
      </div>
      {/* <Navbar2 /> */}
      {/* <div id="detail">
        <Outlet />
        <Outlet />
      </div> */}
      {/* <div id="detail2">
        <Outlet />
      </div> */}
    </div>
  );
}

export default HomePage;

import React from "react";
import profile_photo from "../images/Profile_photo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Link as Linkscroll } from "react-scroll";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="Logo">
        <img src={profile_photo} className="Profile_photo" alt="" />
      </div>
      <div className="Links">
        <Linkscroll
          to="Historypage_scroll"
          // activeClass="active"
          // // smooth={true}
          // spy={true}
          duration={50000}
          // offset={200}
          style={{ textDecoration: "none" }}
        >
          <p className="history">History</p>
        </Linkscroll>
        <Linkscroll to="Climbpage_scroll" style={{ textDecoration: "none" }}>
          <p className="climb">Climb</p>
        </Linkscroll>
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import losangeles from "../images/losangeles.jpeg";
import "./Navbar2.css";
import { Link } from "react-router-dom";
import { Link as Linkscroll } from "react-scroll";
function Navbar2() {
  return (
    <div className="Navbar2" id="Navbar2_scroll">
      <div className="Logo2">
        <img src={losangeles} className="Profile_photo2" alt="" />
      </div>
      <div className="Links2">
        <Linkscroll to="Historypage_scroll" style={{ textDecoration: "none" }}>
          <p className="history2">History</p>
        </Linkscroll>
        <Linkscroll to="Climbpage_scroll" style={{ textDecoration: "none" }}>
          <p className="climb2">Climb</p>
        </Linkscroll>
      </div>
    </div>
  );
}

export default Navbar2;

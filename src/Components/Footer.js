import React from "react";

function Footer() {
  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "rgb(35, 56, 104)",
        // alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <p
        style={{ color: "white" }}
        onClick={() => {
          window.open("https://www.github.com/Rl0007/");
        }}
      >
        {" "}
        Copyright © 2023-24 Agrawal Solutions PVT. LTD.
      </p>
    </div>
  );
}

export default Footer;

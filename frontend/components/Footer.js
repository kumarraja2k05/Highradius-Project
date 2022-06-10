import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        bottom: 1,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <a style={{ color: "blue", textDecoration: "underline" }} href="#">
        Privacy Policy
      </a>
      <span style={{ color: "white" }}>
        | &copy; 2022 HighRadius Corporation. All rights reserved
      </span>
    </div>
  );
};

export default Footer;

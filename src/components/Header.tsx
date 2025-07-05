

import React from "react";

const Header: React.FC = () => {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "20px",
        paddingTop: "20px",
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      <a href="/">
        <img
          src="/HoopVisionFullLogo.png"
          alt="HoopVision Logo"
          style={{ height: "350px", objectFit: "contain" }}
        />
      </a>
    </header>
  );
};

export default Header;
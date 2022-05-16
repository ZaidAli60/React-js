import React from "react";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div>
      <div
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          height: "60px",
        }}
      >
        <p
          className="bg-primary text-white d-flex justify-content-center align-items-center"
          style={{ height: "3.5rem" }}
        >
          {" "}
          &copy;{getCurrentYear()} My Bank. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;

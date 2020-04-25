import React from "react";

const MyDisplayComponent = ({ theme, changeTheme }) => (
  <div
    style={{
      background: theme === "dark" ? "black" : "white",
      height: "100vh",
      width: "100vw",
    }}
  >
    <button onClick={changeTheme}>Change theme</button>
  </div>
);

export default MyDisplayComponent;

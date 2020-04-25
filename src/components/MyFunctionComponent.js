import React from "react";
import { ThemeContext } from "../Contexts";
import MyDisplayComponent from "./MyDisplayComponent";

const MyFunctionComponent = () => (
  <ThemeContext.Consumer>
    {({ value, changeMyValue }) => (
      <MyDisplayComponent theme={value} changeTheme={changeMyValue} />
    )}
  </ThemeContext.Consumer>
);

export default MyFunctionComponent;

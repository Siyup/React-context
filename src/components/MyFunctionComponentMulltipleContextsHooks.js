import React from "react";
import { ThemeContext, TextContext } from "../Contexts";
import MyDisplayComponent from "./MyDisplayComponent";

const MyFunctionComponent = () => {
  const { value: theme, changeMyValue: changeTheme } = React.useContext(
    ThemeContext
  );
  const text = React.useContext(TextContext);
  return (
    <React.Fragment>
      <button>{text}</button>
      <MyDisplayComponent theme={theme} changeTheme={changeTheme} />
    </React.Fragment>
  );
};
export default MyFunctionComponent;

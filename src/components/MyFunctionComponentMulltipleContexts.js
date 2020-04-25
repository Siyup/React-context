import React from "react";
import { ThemeContext, TextContext } from "../Contexts";
import MyDisplayComponent from "./MyDisplayComponent";

const MyFunctionComponent = () => (
  <ThemeContext.Consumer>
    {({ value, changeMyValue }) => (
      <React.Fragment>
        <TextContext.Consumer>
          {(text) => <button>{text}</button>}
        </TextContext.Consumer>
        <MyDisplayComponent theme={value} changeTheme={changeMyValue} />
      </React.Fragment>
    )}
  </ThemeContext.Consumer>
);

export default MyFunctionComponent;

import React from "react";
import { ThemeContext } from "../Contexts";
import MyDisplayComponent from "./MyDisplayComponent";

class MyClassComponent extends React.Component {
  render() {
    const { value, changeMyValue } = this.context;
    return <MyDisplayComponent theme={value} changeTheme={changeMyValue} />;
  }
}

MyClassComponent.contextType = ThemeContext;

export default MyClassComponent;

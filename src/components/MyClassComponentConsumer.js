import React from "react";
import { ThemeContext } from "../Contexts";
import MyDisplayComponent from "./MyDisplayComponent";

class MyClassComponentConsumer extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ value, changeMyValue }) => (
          <MyDisplayComponent theme={value} changeTheme={changeMyValue} />
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default MyClassComponentConsumer;

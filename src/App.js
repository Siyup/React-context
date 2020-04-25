import React, { useState } from "react";
import { ThemeContext } from "./Contexts";
import MyFunctionComponent from "./components/MyFunctionComponent";
import MyClassComponent from "./components/MyClassComponent";
import MyClassComponentConsumer from "./components/MyClassComponentConsumer";
import MyFunctionComponentMulltipleContexts from "./components/MyFunctionComponentMulltipleContexts";
import "./App.css";
const FUNCTIONAL = true;

const App = () => {
  const [themeValue, setThemeValue] = useState("dark");

  const Component = FUNCTIONAL
    ? MyFunctionComponentMulltipleContexts
    : MyClassComponent;
  return (
    <div className="App">
      <ThemeContext.Provider
        value={{
          value: themeValue,
          changeMyValue: () =>
            setThemeValue(themeValue === "dark" ? "light" : "dark"),
        }}
      >
        <Component />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import { ThemeContext, TextContext } from "./Contexts";
import MyFunctionComponentMulltipleContextsHooks from "./components/MyFunctionComponentMulltipleContextsHooks";
import MyFunctionComponentMulltipleContexts from "./components/MyFunctionComponentMulltipleContexts";
import "./App.css";
const HOOKS = true;

const App = () => {
  const [themeValue, setThemeValue] = useState("dark");

  const Component = HOOKS
    ? MyFunctionComponentMulltipleContextsHooks
    : MyFunctionComponentMulltipleContexts;
  return (
    <div className="App">
      <TextContext.Provider value="Im using text provider">
        <ThemeContext.Provider
          value={{
            value: themeValue,
            changeMyValue: () =>
              setThemeValue(themeValue === "dark" ? "light" : "dark"),
          }}
        >
          <Component />
        </ThemeContext.Provider>
      </TextContext.Provider>
    </div>
  );
};

export default App;

import React from "react";

export const ThemeContext = React.createContext({
  value: "light",
  changeMyValue: () => {},
});

export const TextContext = React.createContext("My text");

export const SafeContext = React.createContext();
export const useSafeContext = () => {
  const context = React.useContext(SafeContext);
  if (context === undefined) {
    throw new Error("Your context does not have a provider!!!");
  }
  return context;
};

ThemeContext.displayName = "Theme provider";

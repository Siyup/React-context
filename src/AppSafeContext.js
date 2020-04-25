import React from "react";
import { SafeContext, useSafeContext } from "./Contexts";

const SomeComponent = () => {
  const safeContext = useSafeContext();
  return safeContext;
};

const WITH_PROVIDER = true;

const App = () =>
  WITH_PROVIDER ? (
    <SafeContext.Provider value="Anything">
      <SomeComponent />
    </SafeContext.Provider>
  ) : (
    <SomeComponent />
  );

export default App;

import React from "react";

const ThemeContext = React.createContext({
  theme: null,
  setTheme: () => {},
});

export { ThemeContext };

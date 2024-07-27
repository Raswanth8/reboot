/*
Passing props to manage state is ideal for a small parent and child components but while scaling it can lead to the drilling of props (passing through multiple components).
To avoid this  react context api is pretty useful.

Context API creates a global stare which would help us in the sharing props to any level of hierarchy in the component tree.
It has 2 attributes : provider and consumer.

* */

// ThemeContext.jsx
import { createContext, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;

//App.js
import ThemeProvider from "ThemeContext.jsx";

export function App() {
  return (
    <ThemeProvider>
      <Comp1></Comp1>
      <Comp2></Comp2>
    </ThemeProvider>
  );
}

// Comp1.jsx
import ThemeProvider from "ThemeContext.jsx";
import { useContext } from "react";

export const Comp1 = () => {
  const { theme } = useContext(ThemeContext);

  return <div>Theme for Comp1: {theme}</div>;
};

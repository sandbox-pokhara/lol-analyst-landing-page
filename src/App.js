import { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./contexts";
import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme} className="root-container-wrapper">
        <div className="root-container">
          <Router>
            <Navbar />
            <div className="page-contents">
              <Routes>
                <Route path="/" exact element={<Home />} />
              </Routes>
            </div>
          </Router>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

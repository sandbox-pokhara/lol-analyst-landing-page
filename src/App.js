import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./contexts";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";

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
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              </Routes>
            </div>
          </Router>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

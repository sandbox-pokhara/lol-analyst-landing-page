import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./contexts";
import ContactUS from "./pages/ContactUs";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme} id="root-container-wrapper">
        <div className="root-container">
          <Router>
            <Navbar />
            <div className="page-contents">
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/contact-us" element={<ContactUS />} />
              </Routes>
            </div>
            <Footer />
          </Router>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

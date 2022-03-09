import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./contexts";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Tos from "./pages/Tos";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme} id="root-container-wrapper">
        <div className="root-container">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/tos" element={<Tos />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

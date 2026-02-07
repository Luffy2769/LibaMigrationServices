import Header from "./Components/Header.jsx";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Study from "./Components/Study.jsx";
import Visa from "./Components/Visa.jsx";
import Work from "./Components/Work.jsx";
import Migrate from "./Components/Migrate.jsx";
import Footer from "./Components/Footer.jsx";
import Coaching from "./Components/Coaching.jsx";
import Visit from "./Components/Visit.jsx";
import About from "./Components/About.jsx";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Consultation from "./Components/Consultation.jsx";

// Fonts
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
</style>;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router basename="/VidyaEducationAbroad">
      <div className="App">
        <ScrollToTop />
        <header className="App-header sticky-top">
          <Header />
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/study" element={<Study />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/work" element={<Work />} />
          <Route path="/migrate" element={<Migrate />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/about" element={<About />} />
          <Route path="/consultationForm" element={<Consultation />} />
        </Routes>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
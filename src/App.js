import Header from "./Components/Header.jsx";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Study from "./Components/Study.jsx";
import Visa from "./Components/Visa.jsx";
import Work from "./Components/Work.jsx";
import Migrate from "./Components/Migrate.jsx";
import Footer from "./Components/Footer.jsx";
import Coaching from "./Components/Coaching.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Fonts
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
</style>;

function App() {
  return (
    <Router basename="/LibaMigrationServices">
      <div className="App">
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
        </Routes>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
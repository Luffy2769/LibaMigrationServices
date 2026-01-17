import Header from "./Components/Header.jsx"
import Navbar from "./Components/Navbar.jsx"
import Home from "./Components/Home.jsx"
import './App.css';

// Fonts
<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
</style>

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      <Navbar/>
      </header>
      <Home/>
    </div>
  );
}

export default App;

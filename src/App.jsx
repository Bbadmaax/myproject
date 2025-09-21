 
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import More from "./Component/More";  // 👈 ku dar import cusub
import TellMe from "./Component/TellMe";   // saxan oo magac weyn
import "./App.css"
import Click from "./Component/Click";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <tittle>Logo badmaax</tittle>
        <Link to="/">Home</Link> 
        <Link to="/About">About</Link> 
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
  <Route path="/more" element={<More />} />     {/* 👈 cusub */}
   <Route path="/tellme" element={<TellMe />} />
  <Route path="/Click" element={<Click />} />

 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

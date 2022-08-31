import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects/Projects";
import Passions from "./components/Passions/Passions";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/passions" element={<Passions/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

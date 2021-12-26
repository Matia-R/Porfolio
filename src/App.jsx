import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Passions from "./components/Passions";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
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
      </div>
    </Router>
  );
}

export default App;


import './App.css';

import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/index.jsx';
import About from './pages/About.jsx';
import Search from './pages/Search.jsx';
import Services from './pages/Services.jsx';




function App() {
  return (
    <Router>
     <Navbar/>
     <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/search" element={<Search/>}/>
            
      </Routes>
    </Router>
  );
}

export default App;

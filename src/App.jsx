
import './App.css';

import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/index.jsx';




function App() {
  return (
    <Router>
     <Navbar/>
     <Routes>
            <Route path="/" exact element={<Home/>}/>
            
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import './App.css'

import Navbar from './Navbar';
import Home from "./pages/Home"
import About from "./pages/About"
import Explore from "./pages/explore"
import NotFound from './pages/Notfound';
import Forum from "./pages/Forum";
import Contact from './pages/Contact';
import Weather from './courses/Weatherweb';

function App() {
  

  return (
    
      <Router>
        <Navbar/>
          <Routes>
                <Route exact path='/' element={<Home />} />
                  <Route path='/About' element={<About />} />
                  <Route path='/Explore' element={<Explore />} />
                  <Route path='/Forum' element={<Forum />} />
                  <Route path='/Contact' element={<Contact />} />
                  <Route path='/Weather' element={<Weather />} />
                  <Route path='*' element={<NotFound />}/>
          </Routes>
      </Router>
      
      
  )
}

export default App

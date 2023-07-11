
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import './App.css'

import Navbar from './Navbar';
import Home from "/src/pages/Home"
import About from "/src/pages/About"
import Explore from "/src/pages/Explore"
import NotFound from '/src/pages/NotFound';

import Contact from '/src/pages/Contact';
import Weather from '/src/courses/Weatherweb';

function App() {
  

  return (
    
      <Router>
        <Navbar/>
          <Routes>
                <Route exact path='/' element={<Home />} />
                  <Route path='/About' element={<About />} />
                  <Route path='/Explore' element={<Explore />} />
                  
                  <Route path='/Contact' element={<Contact />} />
                  <Route path='/Weather' element={<Weather />} />
                  <Route path='*' element={<NotFound />}/>
          </Routes>
      </Router>
      
      
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import './App.css'

import Home from "./pages/Home"
import About from "./pages/about"
import Explore from "./pages/explore"
import Search from "./pages/search"
import NotFound from './pages/Notfound';
import Forum from "./pages/forum";

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <Router>
        <Routes>
              <Route exact path='/' element={<Home />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Explore' element={<Explore />} />
                <Route path='/Search' element={<Search />} />
                <Route path='/Forum' element={<Forum />} />
                <Route path='*' element={<NotFound />}/>
                
        </Routes>
      </Router>
      
      
  )
}

export default App

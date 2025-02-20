import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import{WelcomePage} from '../src/components/welcomePage.jsx'
import{LandingPage} from '../src/components/landingPage.jsx'
import{AddCar} from '../src/components/addCar.jsx'


function App() {
  return(
    <div>
      {
        <Router>
          <Routes>
            <Route path="/" element={<WelcomePage/>}/>
            <Route path="/landing-page" element={<LandingPage/>}/>
            <Route path="/add-car" element={<AddCar/>}/>
          </Routes>
        </Router>
      }
    </div>
  )
}

export default App

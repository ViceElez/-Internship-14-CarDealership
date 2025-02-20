import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../styles/index.css';

export const WelcomePage = () => {
    return (
      <div className='welcome-page'>
        <div className="title-div">
            <h1>Welcome to Cars</h1>
            <h2>The best car dealership in town</h2>
        </div>
        <div className="btn-div">
          <Link to="/landing-page">
            <button>Click to continue</button>
          </Link>
        </div>
      </div>
    );
  };    

  //dodaj za ssvaki auto div ko u filmovima i 
  // ka mos stavit sliku i ka ime pa ime auta, 
  // model pa model i tako, uglavnon nek izgleda ko onaj s filmovima
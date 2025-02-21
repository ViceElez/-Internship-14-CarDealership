import Car from './car';
import '../styles/index.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


const loadedCars = JSON.parse(localStorage.getItem('cars')) || [];

 export const LandingPage = () => {

    const [cars, setCars] = useState(() => JSON.parse(localStorage.getItem('cars')) || []);
    
    useEffect(() => {
      const loadedCars = JSON.parse(localStorage.getItem('cars')) || [];
      setCars(loadedCars);
    }, []);

    return (
      <div className='landing-page'>
        <div className="add-car">
          <Link to="/add-car">
            <button>Add New Car</button>
          </Link>
        </div>

        <div className="landing-page-title">
            <h1>Current Available Cars</h1>
        </div>

        <div className="landing-page-filter">
            <span>Sort</span>
            <select id="select-filter">
              <option value="Default">Default</option>
              <option value="Mark">Mark</option>
              <option value="Model">Model Year</option>
            </select>
            <button id="filter-button" className="hidden">Apply Filter</button>
        </div>
        
        <div className="cars-card-container">
        {cars.map((car)=>(
          <Car key={car.id} mark={car.mark} model={car.model} type={car.type} releaseYear={car.releaseYear} regExpireDate={car.regExpireDate}/>
        ))}
        </div>
      </div>
    );
  };

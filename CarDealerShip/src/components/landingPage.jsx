import Car from './car';
import '../styles/index.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { SortCars } from '../scripts/sortingCars.js';


const loadedCars = JSON.parse(localStorage.getItem('cars')) || [];

 export const LandingPage = () => {

    const [cars, setCars] = useState(() => JSON.parse(localStorage.getItem('cars')) || []);
    const[search, setSearch] = useState('');
    
    useEffect(() => {
      const loadedCars = JSON.parse(localStorage.getItem('cars')) || [];

      const sortedCars = [...loadedCars].sort((a, b) =>{
        const releaseYearComparison=b.releaseYear - a.releaseYear;
        if(releaseYearComparison !==0){
          return releaseYearComparison;
        }

        const markComparison = a.mark.toLowerCase().localeCompare(b.mark.toLowerCase());
        if(markComparison !==0){
          return markComparison;
        }

      return a.model.toLowerCase().localeCompare(b.model.toLowerCase());
      });

      setCars(sortedCars);
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
            <select id="select-filter" onChange={SortCars}>
              <option value="Default">Default</option>
              <option value="Mark">Mark</option>
              <option value="Model">Model</option>
            </select>
            <input
              type="text"
              id="mark-input"
              placeholder="Enter Car Mark"
              className="hidden"
            />
            <input
              type="text"
              id="model-input"
              placeholder="Enter Car Model"
              className="hidden"
            />
        </div>
        
        <div className="cars-card-container">
        {cars.map((car)=>(
          <Car key={car.id} mark={car.mark} model={car.model} type={car.type} releaseYear={car.releaseYear} regExpireDate={car.regExpireDate}/>
        ))}
        </div>
      </div>
    );
  };

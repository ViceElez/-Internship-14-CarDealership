import Car from './car';
import '../styles/index.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { showFilterInputs } from '../scripts/showingFilterInputs.js';


const loadedCars = JSON.parse(localStorage.getItem('cars')) || [];

 export const LandingPage = () => {

    const [cars, setCars] = useState(() => JSON.parse(localStorage.getItem('cars')) || []);
    const[searchModel, setSearchModel] = useState('');
    const[searchMark, setSearchMark] = useState('');

    const handleChangeMark = (e) => {
      setSearchMark(e.target.value);
    }

    const handleChangeModel = (e) => {
      setSearchModel(e.target.value);
    }

    let filteredCars = [];
    if(searchMark!=="" && searchMark!==null){
      filteredCars = cars.filter((car) => {
        return car.mark.toLowerCase().includes(searchMark.toLowerCase());
      });
    }
    else if(searchModel!=="" && searchModel!==null){
      filteredCars = cars.filter((car) => {
        return car.model.toLowerCase().includes(searchModel.toLowerCase());
      });
    }
    else
      filteredCars = cars;
    
    
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
            <select id="select-filter" onChange={showFilterInputs}>
              <option value="Default">Default</option>
              <option value="Mark">Mark</option>
              <option value="Model">Model</option>
            </select>
            <input
              type="text"
              id="mark-input"
              placeholder="Enter Car Mark"
              className="hidden "
              onChange={handleChangeMark}
            />
            <input
              type="text"
              id="model-input"
              placeholder="Enter Car Model"
              className="hidden"
              onChange={handleChangeModel}
            />
        </div>
        
        <div className="cars-card-container">
        {filteredCars.map((car)=>(
          <Car key={car.id} 
          mark={car.mark} 
          model={car.model} 
          type={car.type}
          releaseYear={car.releaseYear} 
          regExpireDate={car.regExpireDate}
          cars={cars}
          setCars={setCars}
          />
        ))}
        </div>
      </div>
    );
  };

  //triba risit problem ako user ne izbrise ovo sta je filtera to malo usere sve

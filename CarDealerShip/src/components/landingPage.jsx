import Car from './car';
import {Cars} from '../data.js'
import '../styles/index.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


 export const LandingPage = () => {
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

        <div class="landing-page-filter">
            <span>Sort</span>
            <select id="select-filter">
              <option value="Default">Default</option>
              <option value="Genre">Genre</option>
              <option value="Year">Release Year</option>
              <option value="Rating">Rating</option>
            </select>
            <select id="genre-dropdown" class="hidden">
              <option value="">Select Genre</option>
            </select>
            <input
              type="number"
              id="year-input"
              placeholder="Enter Release Year"
              class="hidden"
            />
            <input
              type="number"
              step="0.1"
              id="rating-input"
              placeholder="Min Rating (e.g., 4.0)"
              class="hidden"
            />
            <button id="filter-button" class="hidden">Apply Filter</button>
        </div>
        
        <div className="cars-card-container">
        {Cars.map((car)=>(
          <Car key={car.id} mark={car.mark} model={car.model} type={car.type} releaseYear={car.releaseYear} regExpireDate={car.regExpireDate}/>
        ))}
        </div>
      </div>
    );
  };

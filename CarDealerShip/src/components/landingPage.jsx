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

        <div>
            <h1>Our Cars</h1>
        </div>
        {Cars.map((car)=>(
          <Car key={car.id} mark={car.mark} model={car.model} type={car.type} releaseYear={car.releaseYear} regExpireDate={car.regExpireDate}/>
        ))}
      </div>
    );
  };
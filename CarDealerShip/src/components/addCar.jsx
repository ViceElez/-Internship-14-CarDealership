import React, { useState } from 'react';
import '../styles/index.css';
import { Link, useNavigate } from 'react-router-dom';
import { addCarOnButtonClick } from '../scripts/addCar.js';

export const AddCar = () => {
    const [loadedCars, setLoadedCars] = useState(JSON.parse(localStorage.getItem('cars')) || []);
    const navigate = useNavigate();

    const onAddCar = () => {
        const updatedCars = JSON.parse(localStorage.getItem('cars')) || [];
        setLoadedCars(updatedCars); 
    };

    return (
        <div className='add-car-page'>
            <nav>
                <Link to="/landing-page">
                    <button>Back</button>
                </Link>
            </nav>

            {loadedCars.length >= 10 ? (
                <div className="max-car-number-container">
                    <h1>You have reached the maximum number of cars!</h1>
                </div>
            ) : (
                <>
                    <header>
                        <h1>Add New Car</h1>
                    </header>
                    <div className='add-car-form'>
                        <form 
                            id="add-car-form" 
                            onSubmit={(e) => addCarOnButtonClick(e, navigate, onAddCar)} 
                        >
                            <input type="text" id="mark" name="mark" placeholder="Mark" required />
                            <input type="text" id="model" name="model" placeholder="Model" required />
                            <select name="car-type" id="car-type">
                                <option value="Sedan">Sedan</option>
                                <option value="SUV">SUV</option>
                                <option value="Sports">Sports</option>
                                <option value="Minivan">Minivan</option>
                                <option value="Coupe">Coupe</option>
                            </select>
                            <input type="number" id="release-year" name="release-year" placeholder="Release Year" required />
                            <input type="date" id="reg-expire-date" name="reg-expire-date" placeholder="Registration Expiration Date" required />
                            <button type="submit">Add Car</button>
                        </form>
                    </div>
                </>
            )}
        </div>
    );
};

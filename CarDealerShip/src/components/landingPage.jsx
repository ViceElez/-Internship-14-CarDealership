import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Car from './car';
import '../styles/index.css';
import { showFilterInputs } from '../scripts/showingFilterInputs.js';
import { Cars } from '../data.js'; 


const initializeLocalStorage = () => {
    const cars = JSON.parse(localStorage.getItem('cars'));
    if (!cars || cars.length === 0) {
        localStorage.setItem('cars', JSON.stringify(Cars));
    }
};

export const LandingPage = () => {
    const [cars, setCars] = useState(() => JSON.parse(localStorage.getItem('cars')) || []);
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleFilterChange = (e) => {
        showFilterInputs(); 
        setSearch(''); 
    };

    let filteredCars = [];
    const selectedFilter = document.getElementById('select-filter')?.value;

    if (search !== "" && search !== null) {
        if (selectedFilter === 'Mark') {
            filteredCars = cars.filter((car) =>
                car.mark.toLowerCase().includes(search.toLowerCase())
            );
        } else if (selectedFilter === 'Model') {
            filteredCars = cars.filter((car) =>
                car.model.toLowerCase().includes(search.toLowerCase())
            );
        }
    } else {
        filteredCars = cars;
    }

    useEffect(() => {
        initializeLocalStorage(); 
        const loadedCars = JSON.parse(localStorage.getItem('cars')) || [];

        const sortedCars = [...loadedCars].sort((a, b) => {
            const releaseYearComparison = b.releaseYear - a.releaseYear;
            if (releaseYearComparison !== 0) {
                return releaseYearComparison;
            }

            const markComparison = a.mark.toLowerCase().localeCompare(b.mark.toLowerCase());
            if (markComparison !== 0) {
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
                <select
                    id="select-filter"
                    onChange={handleFilterChange} 
                >
                    <option value="Default">Default</option>
                    <option value="Mark">Mark</option>
                    <option value="Model">Model</option>
                </select>
                <input
                    type="text"
                    id="mark-input"
                    placeholder="Enter Car Mark"
                    className="hidden"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    id="model-input"
                    placeholder="Enter Car Model"
                    className="hidden"
                    onChange={handleChange}
                />
            </div>

            {filteredCars.length === 0 ? (
                <div className="no-cars-found">
                    <h2>No Cars Available</h2>
                </div>
            ) : (
            <div className="cars-card-container">
                {filteredCars.map((car) => (
                    <Car
                        key={car.id}
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
            )}
        </div>
    );
};
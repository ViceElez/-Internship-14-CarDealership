import '../styles/index.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export const AddCar = () => {
    return (
        <div className='add-car-page'>
            <nav>
                <Link to="/landing-page">
                <button>Back</button>
                </Link>
            </nav>

            <header>
                 <h1>Add New Car</h1>
            </header>
            <div className='add-car-form'>
                <form id="add-car-form">
                    <input
                    type="text"
                    id="mark"
                    name="mark"
                    placeholder="Mark"
                    required
                    />
                    <input
                    type="text"
                    id="model"
                    name="model"
                    placeholder="Model"
                    required
                    />
                    <select name="car-type" id="car-type">
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                        <option value="Sports">Sports</option>
                        <option value="Minivan">Minivan</option>
                        <option value="Coupe">Coupe</option>
                    </select>
                    <input
                    type="number"
                    id="release-year"
                    name="release-year"
                    placeholder="Release Year"
                    required
                    />
                    <input
                    type="date"
                    id="reg-expire-date"
                    name="reg-expire-date"
                    placeholder="Registration Expiration Date"
                    required
                    />
                    <button type="submit" id="submit-button">Add Car</button>
                </form>
            </div>

        </div>
    );
}
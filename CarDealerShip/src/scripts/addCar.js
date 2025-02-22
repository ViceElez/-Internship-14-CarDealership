import { parse, v4 as uuid } from 'uuid';

export function addCarOnButtonClick(e, navigate, onAddCar){
    e.preventDefault();

    const Cars = JSON.parse(localStorage.getItem('cars')) || [];
    const mark = document.getElementById('mark').value.trim();

    if(isFinite(mark) && !isNaN(parseFloat(mark))){
        alert("Mark can't be all numbers!");
        return;
    }
    if(mark === ""){
        alert("Mark can't be empty!");
        return;
    }

    const model = document.getElementById('model').value.trim();

    if(isFinite(model) && !isNaN(parseFloat(model))){
        alert("Model can't be all numbers!");
        return;
    }
    if(model === ""){
        alert("Model can't be empty!");
        return;
    }

    const type = document.getElementById('car-type').value;
    const releaseYear = document.getElementById('release-year').value;
    if(parseInt(releaseYear) <1980 || parseInt(releaseYear) >new Date().getFullYear()){
        alert(`Release year must be between 1980 and ${new Date().getFullYear()}!`);
        return;

    }
    const expiryDate = document.getElementById('reg-expire-date').value;
    if(expiryDate<=new Date().toISOString().split('T')[0]){
        alert("Registration expiry date must be after today!");
        return;
    }

    const carExists = Cars.some((car) => 
        car.mark === mark && car.model === model && car.type === type && 
        car.releaseYear === releaseYear && car.regExpireDate === expiryDate
    );
    
    if (carExists) {
        alert("Car already exists!");
        return;
    }

    const newCar = {
        id: uuid(),
        mark: mark,
        model: model,
        type: type,
        releaseYear: releaseYear,
        regExpireDate: expiryDate
    };

    Cars.push(newCar);
    localStorage.setItem('cars', JSON.stringify(Cars));
    alert("Car added successfully!");
    onAddCar();
    
    navigate('/landing-page');
}
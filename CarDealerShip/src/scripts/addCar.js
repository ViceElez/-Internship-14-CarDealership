import { v4 as uuid } from 'uuid';

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
    const expiryDate = document.getElementById('reg-expire-date').value;

    const carExists = Cars.some((car) => 
        car.mark === mark && car.model === model && car.type === type && 
        car.releaseYear === releaseYear && car.regExpireDate === expiryDate
    );
    
    if (carExists) {
        alert("Car already exists!");
        return;
    }

    const car = {
        id: uuid(),
        mark: mark,
        model: model,
        type: type,
        releaseYear: releaseYear,
        regExpireDate: expiryDate
    };

    Cars.push(car);
    localStorage.setItem('cars', JSON.stringify(Cars));
    alert("Car added successfully!");
    onAddCar();

    setTimeout(() => {
        navigate('/landing-page');
    }, 2000);
}

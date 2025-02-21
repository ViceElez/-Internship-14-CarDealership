export function deleteCarOnButtonClick(event){
    const carCard=event.target.closest('.car-card');

    const carMarkToDelete=carCard.querySelector('p:nth-child(2)').textContent.split(": ")[1];
    const carModelToDelete=carCard.querySelector('p:nth-child(3)').textContent.split(": ")[1];
    const carTypeToDelete=carCard.querySelector('p:nth-child(4)').textContent.split(": ")[1];
    const carReleaseYearToDelete=carCard.querySelector('p:nth-child(5)').textContent.split(": ")[1];
    const carRegExpiryToDelete=carCard.querySelector('p:nth-child(6)').textContent.split(": ")[1];

    if(!confirm(`Are you sure you want to delete ${carMarkToDelete}-${carModelToDelete}-${carReleaseYearToDelete}?`)){
        return;
    }

    const Cars=JSON.parse(localStorage.getItem('cars')) || [];

    const newCars=Cars.filter((car)=>
        car.mark !== carMarkToDelete || car.model !== carModelToDelete || car.type !== carTypeToDelete || 
        car.releaseYear !== carReleaseYearToDelete || car.regExpireDate !== carRegExpiryToDelete
    );

    localStorage.setItem('cars', JSON.stringify(newCars));
    carCard.remove();
}
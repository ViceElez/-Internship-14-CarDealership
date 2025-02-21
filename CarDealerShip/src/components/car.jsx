import {deleteCarOnButtonClick} from '../scripts/deleteCar.js';

const Car=({mark,model,type,releaseYear,regExpireDate})=>{
  const under30Days=30 * 24 * 60 * 60 * 1000;
  const regExpireDateTime=new Date(regExpireDate);
  const isExpired=regExpireDateTime-Date.now()<=under30Days;  
    return(
        <div className={isExpired?"car-card expired":"car-card"}>
        <img src="../src/assets/Images/carImgExample.avif" alt="Audi Car Image" />
        <div className="car-info">
          <h3>Car Information</h3>
          <p>Car Mark: {mark}</p>
          <p>Car Model: {model}</p>
          <p>Car Type: {type}</p>
          <p>Release Year: {releaseYear}</p>
          <p>Registration Expiry: {regExpireDate}</p>
        </div>
        <button className="delete-button" onClick={(event) => deleteCarOnButtonClick(event)}>Delete</button>
      </div>
    )
}

export default Car;
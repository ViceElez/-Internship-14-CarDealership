
const Car=({mark,model,type,releaseYear,regExpireDate})=>{
    return(
        <div className="car-card">
        <img src="../src/assets/Images/carImgExample.avif" alt="Audi Car Image" />
        <div className="car-info">
          <h3>Car Information</h3>
          <p>Car Mark: {mark}</p>
          <p>Car Model: {model}</p>
          <p>Car Type: {type}</p>
          <p>Release Year: {releaseYear}</p>
          <p>Registration Expiry: {regExpireDate}</p>
        </div>
      </div>
    )
}

export default Car;
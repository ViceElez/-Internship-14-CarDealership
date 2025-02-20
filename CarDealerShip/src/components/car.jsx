
const Car=({id,mark,model,type,releaseYear,regExpireDate})=>{
    return(
        <div className="car">
            <p>{id}</p>
            <p>{mark}</p>
            <p>{model}</p>
            <p>{type}</p>
            <p>{releaseYear}</p>
            <p>{regExpireDate}</p>
        </div>
    )
}

export default Car;
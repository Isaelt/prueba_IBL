import useFetch from "../useFetch/useFetch"
import '../styles/Cards.css'

const Cards = () => {


    const datos = useFetch('https://randomuser.me/api/')

    console.log(datos)
  return (
    <div className="card-container">
        {
            datos?.results.map( dat => (
                <div key={dat.name.first} className="datos-container">
                <img width={100}  src={dat.picture.medium} alt="" />
                <hr />
                <div className="info-container">

                name:<h2> {dat.name.large} {dat.name.first} </h2>
                location: <h3>{dat.location.state}, {dat.location.country}.</h3>
                age: <h3> {dat.dob.age}</h3>
                </div>
                
                </div>
            ))
        }
    </div>
  )
}

export default Cards
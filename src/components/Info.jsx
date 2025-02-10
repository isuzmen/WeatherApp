import { WiSunset } from "react-icons/wi";

const Info = () => {
  return (
    <div className="info">
        <p id="city"> City, Country</p>
        <div className="temp-container">
            <p id="temperature"> -- </p> <WiSunset className="fa-c"/>
        </div>
        <p id="weather">Weather</p>
        <div className="feel">
            <p id="felt">Sensed temperature</p> 
            <WiSunset className="fa-c"/>   
        </div>    
    </div>
  )
}

export default Info

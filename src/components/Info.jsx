import { useEffect } from "react";
import { WiSunset } from "react-icons/wi";

const Info = ({info}) => {

  useEffect(()=>{
    console.log(info)
  },[info])
  return (
    <div className="info">
        <p id="city">{info.name} {info.country}</p>
        <div className="temp-container">
            <p id="temperature">
              {info.temp && <span>Temperature :</span>}  
              {info.temp} 
            </p> 
            {info.name && <WiSunset id="firstIcon" className="fa-c"/>   } 
        </div>
        {info.description && <div className="weather-container"> 
          <p id="weather">{info.description}</p> 
        </div> 
        }
        <div className="feel">
            <p id="felt" >
              {info.feels_like && <span>Sensed Temperature: </span>}
              {info.feels_like}
            </p> 
            {info.name && <WiSunset id="secondIcon" className="fa-c"/>   } 

        </div>    
    </div>
  )
}

export default Info

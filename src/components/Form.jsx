import {useState } from "react"
import axios from 'axios'

const Form = ({setInfo}) => {
  const [cityLocation, setCityLocation] = useState("")


  const handleChange = async () => {
    try {
      const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityLocation}&appid=${import.meta.env.VITE_WEATHER_API}&units=metric&lang=en`
      const response = await axios.get(baseURL)
      const {name, sys:{country},main:{temp,feels_like},weather:[{description}] } = response.data
      setInfo({name,country,temp,feels_like,description})
    } catch (error) { 
      console.log(error)
    }
  }
  return (
    <div>
        <h1>Weather App</h1>
        <form onSubmit={(e) => {e.preventDefault(); handleChange()}}>
            <div className="form">
                <input onChange={(e)=>setCityLocation(e.target.value)} className="inputText" type="text" placeholder="Bir şehir yazınız" />
            </div>
            <div className="btnDiv">
                <button className="btn" type="submit">Search</button>
            </div>
        </form>
    </div>
  )
}

export default Form

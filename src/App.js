import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const apiKey = '2a778411f81b003326d4a47ee35bc89a';
  const [data, setData] = useState({});
  const [inputCity, setInputCity] = useState('');

  const handleSearch = () => {
    getWeatherDetails(inputCity);
    setInputCity("")
  };
  const handleChange = (e) => {
    setInputCity(e.target.value);
  };
  const getWeatherDetails = (cityName) => {
    const apiUrl =
      'https://api.openweathermap.org/data/2.5/weather?q=' +
      cityName +
      '&appid=' +
      apiKey;
    axios
      .get(apiUrl)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .then((err) => console.log(err));
  };

  useEffect(() => {
    getWeatherDetails('delhi');
  }, []);
  return (
    <div className="col-md-12">
      <div className="wetherBg">
        <h1 className="heading">Weather App</h1>
        <div className="d-grid gap-3 col-4 mt-4">
          <input
            type="text"
            className="form-control"
            value={inputCity}
            onChange={handleChange}
          />

          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded wetherResultBox">
          <img
            className="weathorIcon"
            src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
          />

          <h5 className="weathorCity"> {data?.name}</h5>
          <h6 className="weathorTemp">
            {(data?.main?.temp - 273.15).toFixed(2)}°C
          </h6>
        </div>
      </div>
    </div>
  );
}

export default App;

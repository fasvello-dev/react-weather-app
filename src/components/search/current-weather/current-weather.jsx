import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">{data.main.temp.toFixed(1)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Detalles</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Sensación térmica</span>
            <span className="parameter-value">
              {data.main.feels_like.toFixed(1)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Viento</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humedad</span>
            <span className="parameter-value">{data.main.humidity} %</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Presión</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

import airImg from "/public/Windy.png";
import sunImg from "/public/Sun.png";
import rainImg from "/public/rain.png";
import tempImg from "/public/temp.png";
import img from "/public/cloud.png";
const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export default function WeekReport() {
  return (
    <div className="weekReport-container">
      <ul className="week-report-container">
        {weekDays.map((day, index) => {
          return (
            <li key={index} className="week-day-temp">
              <p>{day}</p>
              <img
                src={img}
                style={{ width: "30px", height: "30px" }}
                alt="weather-img"
              />
            </li>
          );
        })}
      </ul>

      <div className="air-conditions-container">
        <p className="air-header">Air Conditions</p>
        <ul>
          <li className="temp-container air-conditions-list-item">
            <img src={tempImg} alt="" />
            <div>
              <p>Real Feel</p>
              <p>30°</p>
            </div>
          </li>
          <li className="air-container air-conditions-list-item">
            <img src={airImg} alt="" />
            <div>
              <p>Wind</p>
              <p>0.8 Km/hr</p>
            </div>
          </li>
          <li className="rain-container air-conditions-list-item">
            <img src={rainImg} alt="" />
            <div>
              <p>chance of rain</p>
              <p>2%</p>
            </div>
          </li>
          <li className="sun-container air-conditions-list-item">
            <img src={sunImg} alt="" />
            <div>
              <p>UV index</p>
              <p>4</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

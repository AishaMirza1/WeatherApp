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
    </div>
  );
}

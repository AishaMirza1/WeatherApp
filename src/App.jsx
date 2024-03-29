import AirConditionsReport from "./components/AirConditions";
import Header from "./components/Header";
import SearchAndHourForcast from "./components/HourForcast";
import WeekReport from "./components/weekReport";

function App() {
  return (
    <section className="weather-app-container">
      <Header />
      <div className="hour-report-and-search-container">
        <SearchAndHourForcast />
        <WeekReport />
      </div>
      <AirConditionsReport />
    </section>
  );
}

export default App;

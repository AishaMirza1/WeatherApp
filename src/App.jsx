import Header from "./components/Header";
import SearchAndHourForcast from "./components/HourForcast";
import WeekReport from "./components/weekReport";

function App() {
  return (
    <section className="weather-app-container">
      <Header />
      <SearchAndHourForcast />
      <WeekReport />
    </section>
  );
}

export default App;

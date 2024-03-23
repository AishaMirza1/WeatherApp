import Header from "./components/Header";
import HourForcast from "./components/HourForcast";
import WeekReport from "./components/weekReport";

function App() {
  return (
    <section className="weather-app-container">
      <Header />
      <HourForcast />
      <WeekReport />
    </section>
  );
}

export default App;

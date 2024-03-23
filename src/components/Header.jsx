import cloudImg from "../../public/cloud.png";
import locationLogo from "../../public/logo.png";
export default function Header() {
  return (
    <>
      {" "}
      <div className="weather-info-box1">
        <div className="location">
          <img
            src={locationLogo}
            loading="lazy"
            alt="weather-img"
            className="logo"
          />
          <p className="cityName">NewYork</p>
        </div>
        <p className="weather-keyword">Cloudy</p>
        <div className="temp-time-container">
          <h1 className="heading">26°C</h1>
          <p className="paragraph-2">Sunday | 12 Dec 2023</p>
        </div>
      </div>
      <img
        src={cloudImg}
        loading="lazy"
        width="344"
        alt=""
        className="weather-img"
      />
    </>
  );
}

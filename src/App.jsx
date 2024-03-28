import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import BeatLoader from "react-spinners/BeatLoader";
function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/forecast.json?key=1441e34ca0ac498998a61303232909&q=Colombo&days=3"
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, []);

  function handleClick() {
    // preventDefault(e);
    setLoading(true);
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=1441e34ca0ac498998a61303232909&q=${city}&days=3`
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }

  function handleChange(value) {
    setCity(value);
  }

  return (
    <>
      <div className="main-container">
        {isLoading ? (
          <>
            <BeatLoader color={"#fff"} />
          </>
        ) : (
          <>
            <LeftSide
              handleChange={handleChange}
              handleClick={handleClick}
              data={data}
            />
            <RightSide data={data} />
          </>
        )}
      </div>
      {/* <label htmlFor="city">City: </label>
      <input
        id="city"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
      <div>{data.location ? data.location.country : "No Data"}</div> */}
    </>
  );
}

export default App;

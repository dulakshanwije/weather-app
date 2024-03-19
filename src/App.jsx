import axios from "axios";
import "./App.css";
import { useState } from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});

  function handleClick() {
    // preventDefault(e);
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=1441e34ca0ac498998a61303232909&q=${city}&days=3`
      )
      .then((res) => {
        setData(res.data);
      });
  }

  function handleChange(value) {
    setCity(value);
  }

  return (
    <>
      <div className="main-container">
        <LeftSide
          handleChange={handleChange}
          handleClick={handleClick}
          data={data}
        />
        <RightSide data={data} />
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

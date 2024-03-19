import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import styles from "./leftside.module.css";
import { useEffect, useState } from "react";

export default function LeftSide({ handleChange, handleClick, data }) {
  const [day, setDay] = useState("");
  const day_name = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  useEffect(() => {
    if (data.location) {
      const date = new Date(data.location.localtime);
      const day_no = date.getDay();
      setDay(day_name[day_no]);
    }
  }, [data]);
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.search_bar}>
          <input
            type="text"
            placeholder="Location..."
            onChange={(e) => handleChange(e.target.value)}
          />
          <button onClick={handleClick}>Search</button>
        </div>
        <p className={styles.day}>{day}</p>
        <p className={styles.date}>
          {data.location ? data.location.localtime : ""}
        </p>
        <div className={styles.location_holder}>
          <FontAwesomeIcon icon={faLocationDot} />
          <p className={styles.location}>
            {data.location
              ? `${data.location.name}, ${data.location.country}`
              : ""}
          </p>
        </div>
      </div>
      <div>
        <p className={styles.temp}>
          {data.current ? data.current.temp_c : ""}&deg;C
        </p>
        <div className={styles.condition}>
          <img src={data.current ? data.current.condition.icon : ""} alt="" />
          <p className={styles.status}>
            {data.current ? data.current.condition.text : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

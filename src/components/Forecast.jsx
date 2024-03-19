import { useState, useEffect } from "react";
import styles from "./forecast.module.css";
export default function ForecastBlock({ data }) {
  const [day, setDay] = useState("");
  const day_name = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  useEffect(() => {
    if (data) {
      const date = new Date(data.date);
      const day_no = date.getDay();
      setDay(day_name[day_no]);
    }
  }, [data]);
  return (
    <div className={styles.container}>
      {/* <img src={data ? data.day.condition.icon : ""} alt="" /> */}
      <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" />
      <p className={styles.day}>{day}</p>
      <p className={styles.temp}>{data ? data.day.avgtemp_c : ""}&deg;C</p>
    </div>
  );
}

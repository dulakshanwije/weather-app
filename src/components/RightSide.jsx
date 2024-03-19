import ForecastBlock from "./Forecast";
import styles from "./rightside.module.css";
export default function RightSide({ data }) {
  const forecast_days = data.forecast ? data.forecast.forecastday : [""];
  console.log(forecast_days);
  return (
    <div className={styles.container}>
      {forecast_days.map((element, index) => {
        return (
          <ForecastBlock
            data={data.forecast ? data.forecast.forecastday[index] : ""}
          />
        );
      })}
    </div>
  );
}

import ForecastBlock from "./Forecast";
import styles from "./rightside.module.css";
export default function RightSide({ data }) {
  const forecast_days = data.forecast ? data.forecast.forecastday : [""];
  console.log(forecast_days);
  return (
    <div className={styles.container}>
      <div className={styles.table_container}>
        <table>
          <tr>
            <th>Sun Rise</th>
            <td>
              {data.forecast ? data.forecast.forecastday[1].astro.sunrise : ""}
            </td>
          </tr>
          <tr>
            <th>Sun Set</th>
            <td>
              {data.forecast ? data.forecast.forecastday[1].astro.sunset : ""}
            </td>
          </tr>
          <tr>
            <th>Max. Temperature</th>
            <td>
              {data.forecast ? data.forecast.forecastday[1].day.maxtemp_c : ""}
              &deg; C
            </td>
          </tr>
          <tr>
            <th>Min. Temperature</th>
            <td>
              {data.forecast ? data.forecast.forecastday[1].day.mintemp_c : ""}
              &deg; C
            </td>
          </tr>
          <tr>
            <th>Max. Wind</th>
            <td>
              {data.forecast
                ? data.forecast.forecastday[1].day.maxwind_kph
                : ""}{" "}
              kph
            </td>
          </tr>
          <tr>
            <th>Cloud</th>
            <td>{data.forecast ? data.current.cloud : ""} %</td>
          </tr>
        </table>
      </div>
      <div className={styles.sub_container}>
        {forecast_days.map((element, index) => {
          return (
            <ForecastBlock
              data={data.forecast ? data.forecast.forecastday[index] : ""}
            />
          );
        })}
        <div className={styles.wind_stat}>
          <p className={styles.wind_value}>
            {data.current ? data.current.wind_kph : ""} kph
          </p>
          <p className={styles.wind_title}>Wind Speed</p>
          <p className={styles.wind_value}>
            {data.current ? data.current.humidity : ""} %
          </p>
          <p className={styles.wind_title}>Humidity</p>
        </div>
      </div>
    </div>
  );
}

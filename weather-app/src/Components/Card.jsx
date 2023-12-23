import DisplayData from "./DisplayData";

const App = () => {
  const data = {
    datetime: "16:45:00",
    temp: 58.9,
    feelslike: 58.9,
    humidity: 54.9,
    dew: 42.7,
    snow: 0,
    windspeed: 5.8,
    winddir: 280,
    pressure: 1020,
    visibility: 4.3,
    cloudcover: 50,
    solarradiation: 144,
    solarenergy: 0.5,
    uvindex: 1,
    icon: "partly-cloudy-day",
    sunrise: "06:49:10",
    sunset: "17:15:30",
    moonphase: 0.22,
  } ;

  return (
    <div className="App">
      <DisplayData data={data} />
    </div>
  );
};

export default App;
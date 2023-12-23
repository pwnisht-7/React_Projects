import { useCallback, useContext } from "react";
import NewsContext from "../Context/NewsContext";

function fetchWeatherData() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const today = `${year}-${month}-${day}`;
    const apiKey = 'CUZDKY2855SPUN3FJ7VMN3GKQ'
    const { setDays, setDetail, setHour, setCurrentCondition, query } = useContext(NewsContext)
    const fetchWeather = useCallback((
        async () => {
            const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}/${today}/today?unitGroup=us&key=${apiKey}`;
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Failed To Fetch Weather Data');
                }
                const data = await response.json();
                setCurrentCondition(data.currentConditions);
                setHour(data.days.hours);
                setDays(data.days);
                setDetail(data);
                console.log(data)
            } catch (error) {
                console.log("error", error);
                return error;
            }
        }
    ), [setDays, setDetail, setHour, setCurrentCondition, query])
    fetchWeather()
}
export default fetchWeatherData;
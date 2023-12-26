/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import NewsContext from "../Context/NewsContext";

const {setToday} = useContext(NewsContext)

const Today = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const today = `${year}-${month}-${day}`;
    setToday(today)
}
Today()
export default Today;
import { useMutation } from "react-query";
import { axios } from "../Config/axios";

/**
 * Function to get the date before seven days from today.
 *
 * @return {string} The date before seven days in the format 'YYYY-MM-DD'
 */
function getDateBeforeSevenDays() {
    const today = new Date();
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() - 7);
    const year = nextDate.getFullYear();
    const month = String(nextDate.getMonth() + 1).padStart(2, '0');
    const day = String(nextDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
const dateBeforeSevenDays = getDateBeforeSevenDays();

/**
 * Function that returns the current date in the format 'YYYY-MM-DD'.
 *
 * @return {string} The current date in 'YYYY-MM-DD' format.
 */
function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
const currentDate = getCurrentDate();

/**
 * Fetches weather data for a specific city.
 *
 * @param {string} name - The name of the city for which to fetch weather data.
 * @return {Promise} A promise that resolves to the weather data for the specified city.
 */
export const fetchWeather = (name) => {
    return axios.get(`&city=${name}&end_date=${currentDate}&start_date=${dateBeforeSevenDays}`);
}

/**
 * A custom React hook that fetches weather data.
 *
 * @param {string} name - The name parameter used in the function.
 * @return {object} The result of the useMutation hook.
 */
export const useWeatherData = (name) => {
    return useMutation(fetchWeather, {
        onSuccess: (fetchWeatherData) => {
        }
    });
};
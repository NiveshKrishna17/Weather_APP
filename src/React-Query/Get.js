import { useMutation } from "react-query";
import { axios } from "../Config/axios";

export const fetchWeather = (name) => {
    return axios.get(`&city=${name}`);
}

export const useWeatherData = (name) => {
    return useMutation(fetchWeather, {
        onSuccess: (fetchWeatherData) => {
        }
    });
};
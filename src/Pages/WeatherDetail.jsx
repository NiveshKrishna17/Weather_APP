import React from 'react'
import { useLocation } from 'react-router-dom'
import { Weather, WeatherFall } from './index'

/**
 * Function to render weather details based on location state.
 *
 * @return {JSX.Element} Rendered weather details component
 */
const WeatherDetail = () => {

    const location = useLocation()
    const weatherData = location?.state;

    if (weatherData?.data) return <Weather weatherData={weatherData} />
    else return <WeatherFall />

}

export default WeatherDetail
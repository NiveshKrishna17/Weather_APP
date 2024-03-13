import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import moment from 'moment';
import React, { Fragment } from 'react';
import { HiLocationMarker } from "react-icons/hi";

const Weather = ({ weatherData }) => {
    let { city_name, country_code, timezone, data } = weatherData?.data

    /** Predefined icons based on temperature */
    const temperatureIcons = {
        sunny: '☀️',
        partlyCloudy: '⛅',
        cloudy: '🌥️',
        rainy: '🌧️',
        snowy: '❄️',
        extremeCold: '🥶',
        extremeHeat: '🔥'
    };

    /**
     * Get the weather icon based on the temperature.
     */
    function getWeatherIconByTemp(temp) {
        if (temp >= 90) return temperatureIcons.extremeHeat;
        if (temp >= 80) return temperatureIcons.sunny;
        if (temp >= 70) return temperatureIcons.partlyCloudy;
        if (temp >= 50) return temperatureIcons.cloudy;
        if (temp >= 40) return temperatureIcons.rainy;
        if (temp < 0) return temperatureIcons.extremeCold;
        return temperatureIcons.snowy;
    }


    return (
        <Fragment>
            <Container maxWidth={false} disableGutters sx={{ textAlign: 'center', minHeight: '100vh' }} className="detail_homeScreen">
                <Grid container justifyContent="center" alignItems="center" spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3">{city_name} | <Typography variant="h3" component="span">{country_code}</Typography></Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5"><HiLocationMarker /> {timezone}</Typography>
                        <Typography variant="h5">{moment().format('LT')}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }} className="detail_temp">
                            {[...data].map((_, index) => (
                                <Box key={index} sx={{ p: 2, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 2 }}>
                                    <Typography variant="h1">{getWeatherIconByTemp(_.temp)}</Typography>
                                    <Typography variant="h5" key={index}>{_.temp}</Typography>
                                    <Typography variant="h5">{moment(_.date).format('dddd')}</Typography>
                                    <Typography variant="h5">{moment(_.date).format('L')}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Fragment >
    );
}

export default Weather;

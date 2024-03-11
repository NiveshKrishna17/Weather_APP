import React, { Fragment } from 'react'
import { useLocation } from 'react-router-dom'
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { HiLocationMarker } from "react-icons/hi";
import moment from 'moment';


const WeatherDetail = () => {

    const location = useLocation()
    const weatherData = location?.state
    let { city_name, country_code, timezone, data } = weatherData?.data

    return (
        <Fragment>
            <Container maxWidth={false} disableGutters sx={{ textAlign: 'center', height: '100vh' }} className="detail_homeScreen">
                <Grid container>
                    <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                        <Typography variant="h3" sx={{ ml: 3 }}>{city_name} {"|"}</Typography>
                        <Box component="span" sx={{ backgroundColor: 'transparent.main', margin: 1 }}>
                            <Typography variant="h3" sx={{}}>{country_code}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', flexDirection: "column" }}>
                        <Typography variant="h2" sx={{ mt: 3 }}><HiLocationMarker /></Typography>
                        <Typography variant="h5" sx={{}}>{timezone}</Typography>
                        <Typography variant="h5" sx={{}}>{moment().format('LT')}</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    )
}

export default WeatherDetail
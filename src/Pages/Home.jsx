import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Input } from '../Components';
import { useWeatherData } from '../React-Query/Get';

/**
 * Function to fetch weather data from the API and handle the response accordingly.
 *
 */
const Home = () => {
    const [inputValue, setInputValue] = useState('')
    const [debouncedValue, setDebouncedValue] = useState('')
    const weatherDataMutation = useWeatherData()
    const navigate = useNavigate();

    useEffect(() => {
        const delayInputTimeoutId = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, 500);

        return () => clearTimeout(delayInputTimeoutId);
    }, [inputValue])

    /**
     * Sets the input value based on the event object.
     *
     * @param {type} e - the event object
     * @return {type} undefined
     */
    const valueFromInput = (e) => {
        setInputValue(e)
    }

    /**
     * Function to fetch weather data from the API and handle the response accordingly.
     *
     */
    const getWeatherFromApi = async () => {
        if (debouncedValue) {
            const weatherResponse = await weatherDataMutation.mutateAsync(debouncedValue)
            if (weatherResponse) {
                toast.success('Weather Data Fetched')
                navigate("/weather", { state: { data: weatherResponse?.data } });
            } else {
                toast.error('Error in Fetching Data')
            }
        } else {
            toast.error('Please Enter a City Name')
        }
    }
    return (
        <Fragment>
            <Grid container>
                <Container maxWidth={false} disableGutters sx={{ textAlign: 'center', height: '100vh' }} className='home_Container'>
                    <Typography variant='h2' sx={{ color: '#150E5B', fontWeight: 'bold', mb: 5 }}>Weather Forecast</Typography>
                    <Box sx={{ mx: 'auto', mb: 5, display: 'flex', justifyContent: 'center' }}>
                        <Input type={"text"} placeholder={"Enter a City"} onChange={valueFromInput} />
                    </Box>
                    <Button variant="contained" onClick={getWeatherFromApi} color="inherit" sx={{ mx: 'auto', display: 'block', color: 'black', background: 'transparent', fontWeight: 'bold' }}>
                        Get Weather
                    </Button>
                </Container>
            </Grid>

        </Fragment>
    )
}

export default Home
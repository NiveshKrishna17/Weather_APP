import { Box, Container, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { Image } from '../Components'
import { APIERROR } from '../assets'

/**
 * Renders a fallback UI component for Weather Detail API failure.
 *
 * @return {JSX.Element} The fallback UI component
 */
const WeatherDetailFallback = () => {
    return (
        <Fragment>
            <Container maxWidth={false} disableGutters sx={{ textAlign: 'center', height: '100vh', backgroundColor: 'indigo' }}>
                <Box>
                    <Typography variant="h4" className='fallbackText'>Weather Detail Api Failed to get an Responce</Typography>
                    <Image src={APIERROR} alt={"Weather Detail Error Response"} />
                </Box>
            </Container>
        </Fragment>
    )
}

export default WeatherDetailFallback
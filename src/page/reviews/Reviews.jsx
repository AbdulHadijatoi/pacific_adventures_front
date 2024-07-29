import { Grid, Typography, useMediaQuery, useTheme, Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Page from '../../components/page'

const Reviews = ({ nameProp }) => {
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const imageWidth = isSmall ? '60px' : '150px'

    return (
        <Page title={nameProp}>
            <Grid container spacing={2} sx={{ mt: 7, mb: 7, padding: ' 20px 5%' }}>
                
                <Grid item display="flex" flexDirection="column" alignItems="center" sx={{margin: 'auto'}}>
                    <Typography sx={{ fontSize: isSmall ? '1rem' : '2rem', fontWeight: 600, textAlign: 'center' }}>
                        Where would you like to write a review?
                    </Typography>
                    <Grid container spacing={2} justifyContent="center" sx={{ paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                        <Grid item>
                            <Link to='https://g.page/r/CYIcFLQ85zrXEAE/review' target='_blank'>
                                <Box display="flex" justifyContent="center">
                                    <img src="/googlee.webp" alt="" width={imageWidth} />
                                </Box>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to='https://www.tripadvisor.com/UserReviewEdit-g295424-d24937588-Pacific_Adventures-Dubai_Emirate_of_Dubai.html' target='_blank'>
                                <Box display="flex" justifyContent="center">
                                    <img src="/tripadvisor-removebg-preview.png" alt="" width={imageWidth} />
                                </Box>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to='https://www.trustpilot.com/review/pacific-adventures.com' target='_blank'>
                                <Box display="flex" justifyContent="center">
                                    <img src="/trustpilot.png" alt="" width={imageWidth} />
                                </Box>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                
            </Grid>
        </Page>
    )
}

export default Reviews

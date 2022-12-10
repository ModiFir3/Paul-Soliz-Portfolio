import React from 'react'
import { Avatar, Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import './style.css'

function Homepage() {
    return (
        <div>
            <div className='avatar'>
                <Avatar
                    alt=""
                    src=""
                    sx={{ width: 300, height: 300 }}
                />
            </div>

            <div className='nameCard'>
                <h1>
                    Paul Soliz
                </h1>
                <h2>about me</h2>
                <p>this is the about me section</p>
            </div>

            <div className='projectCard'>
                <h3>Projects</h3>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Card sx={{}}>
                            <CardMedia
                                component='img'
                                alt=''
                                image=''
                            />

                            <CardContent>
                                <Typography gutterBottom variant='h5' component="div">
                                    Project Name
                                </Typography>
                                <Typography variant='body1' color='text.secondary'>
                                    this is the about section for the project
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <GitHubIcon></GitHubIcon>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={6}>
                        <Card sx={{}}>
                            <CardMedia
                                component='img'
                                alt=''
                                image=''
                            />

                            <CardContent>
                                <Typography gutterBottom variant='h5' component="div">
                                    Project Name
                                </Typography>
                                <Typography variant='body1' color='text.secondary'>
                                    this is the about section for the project
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <GitHubIcon></GitHubIcon>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Homepage
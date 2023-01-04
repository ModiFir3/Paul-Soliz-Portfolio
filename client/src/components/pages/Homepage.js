import React from 'react'
import { Avatar, Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import AddIcon from '@mui/icons-material/Add';


function Homepage() {
    return (
        // avatar img
        <div>
            <div className='avatar'>
                <Avatar
                    alt=""
                    src=""
                    sx={{ width: 300, height: 300 }}
                />
            </div>

            {/* Name & bio info */}
            <div className='nameCard'>
                <h1>
                    Paul Soliz
                </h1>
                <h2>about me</h2>
                <p>this is the about me section</p>
            </div>

            {/* project title */}
            <div className='projectCard'>

                <div className='projectTitle'>
                    <h3>Projects</h3>
                    <div className='btn'>
                        <Button>
                            <AddIcon></AddIcon>
                        </Button>
                    </div>
                </div>

                {/* project cards */}
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
                                <Button
                                    color='inherit'
                                >
                                    <GitHubIcon />
                                </Button>
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
                                <Button
                                    color='inherit'
                                >
                                    <GitHubIcon />
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export default Homepage;
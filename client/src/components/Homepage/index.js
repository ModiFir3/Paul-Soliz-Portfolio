import React from 'react'
import { Avatar, Grid } from '@mui/material'
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
                        hello
                    </Grid>
                    <Grid item xs={6}>
                        hello
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Homepage
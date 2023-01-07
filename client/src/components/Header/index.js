import React from 'react'
import './style.css'
import { Button } from '@mui/material'

function Nav() {
    return (
        <nav className='navBar'>
            <Button variant='text'>Homepage</Button>
            <Button variant='text'>Portfolio</Button>
            <Button variant='text'>Resume</Button>
            <Button variant='text'>Contact</Button>
        </nav>
    )
}

export default Nav;
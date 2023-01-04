import React from 'react'
import './style.css'
import { Link } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {

    return (
        <div className='footerIcon'>
            <GitHubIcon
                sx={{
                    width: 50,
                    height: 50
                }}
            />
            <LinkedInIcon
                sx={{
                    width: 50,
                    height: 50
                }}
            />
        </div>
    )
}

export default Footer;
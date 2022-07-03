import React from "react";

import LinkedInImage from '../../assets/images/footer/LinkedIn_Logo.svg.png'
import GithubImage from '../../assets/images/footer/GitHub-Mark-120px-plus.png'

const Footer = () => {
    return (
        <footer className="d-flex justify-content-center gap-5 bg-secondary">
            <img
                src={LinkedInImage}
                alt="LinkedIn Logo that links to Paul Soliz personal LinkedIn"
                herf="https://www.linkedin.com/in/paul-soliz-iii/"
            />

            <img
                src={GithubImage}
                alt="Github Logo that links to Paul Soliz personal Github"
                onClick={'https://github.com/ModiFir3'}
            />
        </footer>
    )
}

export default Footer
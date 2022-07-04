import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import cresendoImg from '../../assets/images/portfolio/crescendo.png'
import voyagerImg from "../../assets/images/portfolio/voyager-homepage.png"

const Portfolio = () => {
    const portfolioList = [
        {
            name: "Crescendo",
            description: "Crescendo is a social music site that lets users connect to their favorite songs/ playlist from Spotify to add comments with friends/ musicians.",
            link: "https://github.com/ModiFir3/proj-2-music-site",
            image: cresendoImg
        },
        {
            name: "Voyager Space Tracker",
            description: "Voyager Space Tracker gives the latest in space and astronomy news.",
            link: "https://github.com/ModiFir3/Project-1-Team-Voyager",
            image: voyagerImg
        }
    ]

    return (
        <Container>
            <Row>
                {portfolioList.map((port) => (
                    <Col>
                        <div className="hoverImg m-3">
                            <a href={port.link}>
                                <img src={port.image} alt={port.description} className="portImg"></img>
                            </a>
                            <div className="overlay">
                                <a href={port.link}>
                                    <p className="overlay-text">{port.name}</p>
                                </a>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container >
    )
}

export default Portfolio;
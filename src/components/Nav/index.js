import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Nav = () => {
    const navList = [
        {
            name: 'About Me'
        },
        {
            name: 'Portfolio'
        },
        {
            name: 'Contact'
        },
        {
            name: 'Resume'
        }
    ]

    return (

        <nav>
            <Container>
                <Row>
                    {navList.map((list) => (
                        <Col>
                            <a href="" className="text-decoration-none">{list.name}</a>
                        </Col>
                    ))}
                </Row>
            </Container>
        </nav>
    )
}

export default Nav
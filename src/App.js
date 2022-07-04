import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <Container fluid className="bg-secondary">
        <Row>
          <Col>
            <Header></Header>
          </Col>
          <Col>
            <Nav></Nav>
          </Col>
        </Row>
      </Container>
      <About></About>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
}

export default App;

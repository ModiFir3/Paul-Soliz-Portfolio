import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";

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
      <Footer></Footer>
    </div>
  );
}

export default App;

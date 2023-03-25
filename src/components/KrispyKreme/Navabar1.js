import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faMagnifyingGlass,faBox,faBandage } from "@fortawesome/free-solid-svg-icons";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../pages/CSS/KrispyKreme/krispyKreme.css"

export default function Navbar1() {
  return (
<div className="App">
      <Container>
      <Row>
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <FontAwesomeIcon icon={faLocationDot} />
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home">Shops</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Join Rewards</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Sign In</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2"><FontAwesomeIcon icon={faMagnifyingGlass} /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2"><FontAwesomeIcon icon={faBox} /></Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>
      <hr />
      <Row>
      <Col>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home"><FontAwesomeIcon icon={faBandage} /> </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home"> Menu </Nav.Link>
              <Nav.Link href="#features">Catering </Nav.Link>
              <Nav.Link href="#pricing"> Rewards </Nav.Link>
              <Nav.Link href="#features">Gift Cards</Nav.Link>
              <Nav.Link href="#pricing">Fund Raising</Nav.Link>
              <Nav.Link href="#pricing">Retail</Nav.Link>
              <Nav.Link href="#pricing">Order delivery</Nav.Link>
              <Nav.Link href="#pricing">Order pickup</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    </Col>
    </Row>
    </Container>
    </div>
  );
}
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";


export default function KrispyKreme() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><FontAwesomeIcon icon={faCircleDot} /> Order Delivery</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"> <FontAwesomeIcon icon="fa-solid fa-house" /> Order Pickup</Nav.Link>
            <Nav.Link href="#features">Sing In/ Join Rewards</Nav.Link>
            <Nav.Link href="#pricing">Find a location</Nav.Link>
            <Nav.Link href="#features">Search in Krispy Kreme</Nav.Link>
            <Nav.Link href="#pricing">Delivery / Pickup</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br/>
      <h3>Replicating Krispy Kreme through react</h3>
      <h4>Journey to perfecting react</h4>
      <ul>

      </ul>
      <hr/>
    </div>
  );
}




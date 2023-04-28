import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./CSS/testing.css"
import QRcode from '../images/QRcomponentchallenge/image-qr-code.png' 

export default function TestingPage() {
  return (
    <div className="App">
        <Container>
        <Row>
            <Col>
                <h3>QR component challenge </h3>
                <br></br>
                <img src={QRcode} className="image1" alt="images" />
            </Col>
        </Row>
        </Container>
    </div>
  );
}

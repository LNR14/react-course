import React from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import "./CSS/testing.css"
import LeftColumn from '../components/MultiStepForm/LeftColumn';
import QRcode from '../images/QRcomponentchallenge/image-qr-code.png' 

export default function MultiStepForm() {


  return (
    <div className="App">
        <Container>
        <Row>
            <Col>
            <LeftColumn/>
             </Col>
            <Col>
                <h2>Personal Info</h2>
                <br></br>
                Please provide your name,email address and phone number
            </Col>

        </Row>
        <Row>
            <b>Improve your front-end skills by building projects </b>
        </Row>
        </Container>
    </div>
  );
}
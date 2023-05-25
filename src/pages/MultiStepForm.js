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
            <LeftColumn/>
            </Row>
        </Container>

    </div>
  );
}
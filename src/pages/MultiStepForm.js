import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./CSS/testing.css"
import QRcode from '../images/QRcomponentchallenge/image-qr-code.png' 

export default function MultiStepForm() {
  return (
    <div className="App">
        <Container>
        <Row>
            <Col>
             <ol>
                <li>Step 1
                    <br/>
                    YOUR INFO
                </li>
                <li>Step 2 
                    <br/>
                    SELECT PLAN
                </li>                
                <li>Step 3
                    <br/>
                    ADD-ONS
                </li>
                <li>Step 4
                    <br/>
                    SUMMARY
                </li>
                

                
             </ol>
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
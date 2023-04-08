import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Navbar from "../components/KrispyKreme/Navabar1"
import logo from "../images/krispyKreme/elena-koycheva-PFzy4N0_R3M-unsplash.jpg"
import "./CSS/KrispyKreme/krispyKreme.css"

export default function KrispyKreme() {

  return (
    <div className="App">
      <Navbar/>
      <br/>
      <Container>
        <Row >
          <Col  >
          <img src={logo} className="image1" alt="images" >
          </img>
          </Col>
        </Row>
        
      </Container>
      
    </div>
  );
}
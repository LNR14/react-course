import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./CSS/testing.css"

export default function TestingPage() {
  const arr=["asljdn","askjdhas","193874612","oaisudhas"]
  const listItems = arr.map((number) =>  <li>{number}</li>);
  return (
    <div className="App">
      
      <h3>Testing Page</h3>
      <hr/>
      
      
      <Container>
      <Col>
        <ul>{listItems}</ul>
      </Col>
      <Col>
          Somehting is wrong 
      </Col>
    </Container>
    </div>
  );
}

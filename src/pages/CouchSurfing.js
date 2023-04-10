import React, { useState } from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import "./CSS/couchSurfing/couchSurfing.css"
import pic1 from "../images/couchsurfing/title_bar.jpg"



export default function CouchSurfing() {

    const list= ["About","Getting Started", "Safety", "Community", "Support"]
    const [sidebar,setSidebar] = useState(null)

    function getSidebarDiv(){
        switch(sidebar){
            case "About":
                <div>About</div>
                break;
            case "Getting Started":
                <div>Getting Started</div>
                break;
            case "Safety":
                <div>Safety</div>
                break;
            case "Community":
                <div>Community</div>
                break;
            case "Support":
                <div>Support</div>
                break;
            default :
                <div>About</div>
        }
    }


    const listItems1 = list.map((listItem) =>
    <span>
        <li value={listItem}><a>{listItem}</a></li>
            <hr/>
    </span>
    );
  return (
    <div className="App">
      <h3>Couch Surfing</h3>
      <hr/>
      <Container>
        <Row>
            <Col>
            <img src={pic1} className="image1" alt="images" >
          </img>
            </Col>
        </Row>
        <Row>
            <Col xs="4" md="2" lg ="2">
                <ul >
                    {listItems1}
                </ul >
            </Col>
        </Row>
      </Container>
    </div>
  );
}
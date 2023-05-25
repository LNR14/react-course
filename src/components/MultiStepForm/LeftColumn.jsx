import React from "react";
import {Container,Row,Col,Button} from 'react-bootstrap';
import PersonalInfo from "./PersonalInfo"
import { withRouter } from "react-router";

const leftColumn = () => {

    const leftColumnSteps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS","SUMMARY"]
    const listItemsLeftColumnSteps = leftColumnSteps.map((step,index) => <li>
             <Button name={step} variant="outline-primary" onClick={step}>
            Step {index +1}
                <br/>
                {step}
            </Button>
            <br/>
            <br/>
            </li>
            )
        
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <ol>
                        {listItemsLeftColumnSteps}
                    </ol>
                    </Col>
                    <Col>
                        <PersonalInfo/>
                    </Col>
                </Row>
                
            </Container>

     </div>
    );
  };
  export default leftColumn
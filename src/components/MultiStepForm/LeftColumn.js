import React from "react";
import {Nav} from "react-bootstrap";
import {Container,Row,Col,Button} from 'react-bootstrap';
import { withRouter } from "react-router";

const leftColumn = () => {

    const leftColumnSteps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS","SUMMARY"]
    const listItemsLeftColumnSteps = leftColumnSteps.map((step,index) => <li>
             <Button name={step} variant="outline-primary">
            Step {index +1}
                <br/>
                {step}
            </Button>
            <br/>
            <br/>
            </li>
            )
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>  <li>{number}</li>);
        
    return (
        <ol>
        {listItemsLeftColumnSteps}
     </ol>
    );
  };
  export default leftColumn
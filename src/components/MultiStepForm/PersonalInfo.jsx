import React from "react";
import { useState } from 'react';
import {Container,Row,Col,Button,Form,InputGroup} from 'react-bootstrap';
import { withRouter } from "react-router";

const PersonalInfo = () => {
        const [validated,setValidated] = useState(false);

        const handleSubmit = (event) =>{
            const form = event.currentTarget;
            if(form.checkValidity() == false){
                event.preventDefault();
                event.stopPropagation();
            }
            setValidated(true);
        }
    return (
    <div>
        <h2>Personal Info  </h2>
        <h4>Please provide your name,email address and phone number.</h4>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <br/>
            <br/>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.label>Name</Form.label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Name"
                        defaultValue="John Doe"
                    />
                </Form.Group>
            </Row>
            <br/>
            <br/>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.label>Email Address</Form.label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Email address"
                        defaultValue="example@example.com"
                    />
                </Form.Group>
            </Row>
            <br/>
            <br/>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.label>Phone number</Form.label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="55-555-5555"
                        defaultValue="eg. "
                    />
                </Form.Group>
            </Row>
        </Form>
     </div>
    );
  };
  export default PersonalInfo
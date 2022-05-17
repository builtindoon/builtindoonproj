import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormCheck, FormLabel } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
class Addlocalshop extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleShopName = this.handleShopName.bind(this);
    }
  
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleShopName(event) {
      event.preventDefault();
    }
     Addlocalshop = () => {
      function handleOnChange(value) {
        console.log("Captcha value: " + value);
      }
      return (

        <div className="container">
        <h1>Add local shop </h1>
        
         <Form>
    <Form.Group className="mb-3">
      <Form.Label>Shop Name</Form.Label>
      <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Shop Address</Form.Label>
      <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>State</Form.Label>
      <Form.Select>Dehli,Pune,Mumbai,Bengaluru</Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>District</Form.Label>
      <Form.Select>Bihar,Dehradun,Lucknow</Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Pincode</Form.Label>
      <Form.Control type="text" />
      </Form.Group>
      
      <Form.Group className="mb-3">
      <Form.Label>Landmark</Form.Label>
      <Form.Control type="text" />
      </Form.Group>
     
      <>
      <Form.Group>
       <Form.Label>Delivery Provided:</Form.Label>
       <Form.Check label="yes"/>
       <Form.Check label="No"/>
      </Form.Group>
     </>
     <Form.Label>Items to be added</Form.Label>
     <br></br>
      <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={handleOnChange}
        />
     <Button variant="none" type="submit">
     Add Store
   </Button>
   <Button variant="success" type="submit">
     Cancel
   </Button>
   </Form>
   </div>
       );
      
      };
    }
    
 export default Addlocalshop;
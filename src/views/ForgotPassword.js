import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export class ForgotPassword extends React.Component {
  
  
  render() {
    return (
      <div className="container">
        <h1>Forgot Password</h1>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email/PhoneNo</Form.Label>
            <Form.Control type="Email/PhoneNo" placeholder='Enter your Email/phone No' />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
          <Button variant="none" type="Cancel">
            Cancel
          </Button>
        </Form>
        
      </div>
    )
  };
}

export default ForgotPassword;
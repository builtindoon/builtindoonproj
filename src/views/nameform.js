import React from 'react';
 import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  ReCAPTCHA  from "react-google-recaptcha";
export class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
    return (
        <div className="container">
          <h1>User Registration</h1>
        <Form>
      <Form.Group className="mb-1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" />
        <Form.Text className="text-muted">
          First Name
        </Form.Text>
    
        <Form.Control type="text" />
        <Form.Text className="text-muted">
          Last Name
        </Form.Text>
      </Form.Group>
    
      <Form.Group className="mb-1">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" />
        <Form.Text className="text-muted">
         Please enter valid phone number
        </Form.Text>
      </Form.Group>
    
      <Form.Group className="mb-1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" />
        <Form.Text className="text-muted">
         example@example.com
        </Form.Text>
      </Form.Group>
    
      <Form.Group className="mb-1">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" />
        <Form.Text className="text-muted">
         Street Address
        </Form.Text>
    
        <Form.Control type="text" />
        <Form.Text className="text-muted">
         Street Address Line 2
        </Form.Text>
    
        <Form.Control type="text" />
        <Form.Text className="text-muted">
         City
        </Form.Text>
    
        <Form.Control type="text" />
        <Form.Text className="text-muted">
         State/Province
        </Form.Text>
    
        <Form.Control type="text" />
        <Form.Text className="text-muted">
         Postal/Zip Code
        </Form.Text>
    
        <Form.Control type="text" />
        <Form.Text className="text-muted">
         Postal/Zip Code
        </Form.Text>
      </Form.Group>
     
      <Button variant="none" type="cancel">
        Cancel
      </Button>
      <Button variant="success" type="submit">
        Register
      </Button>
    </Form>
    </div>
        )
      };
  }

  export default NameForm;
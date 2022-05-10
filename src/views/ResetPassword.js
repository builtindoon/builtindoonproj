import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export class ResetPassword extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>ResetPassword Password</h1>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>New Password:</Form.Label>
            <Form.Control type="password"/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control type="password"/>
          </Form.Group>
          <Button variant="success" type="submit">
            Reset
          </Button>
          <Button variant="none" type="Cancel">
            Cancel
          </Button>
        </Form>
      </div>
    )
  };
}

export default ResetPassword;